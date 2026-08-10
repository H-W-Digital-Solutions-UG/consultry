import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const mode = process.argv[2] ?? "inspect-reference";
const referencePath = "/Users/jules/dev/consultry/OmniSEC_FinancialPlanning_Sheet.xlsx";
const previewDir = "/Users/jules/dev/consultry/tmp/financial-model/reference-previews";

if (mode === "inspect-reference") {
  await fs.mkdir(previewDir, { recursive: true });
  const input = await FileBlob.load(referencePath);
  const workbook = await SpreadsheetFile.importXlsx(input);
  const summary = await workbook.inspect({
    kind: "workbook,sheet,table",
    maxChars: 16000,
    tableMaxRows: 8,
    tableMaxCols: 10,
    tableMaxCellChars: 100,
  });
  process.stdout.write(summary.ndjson + "\n");

  const sheets = await workbook.inspect({ kind: "sheet", include: "id,name", maxChars: 12000 });
  process.stdout.write(sheets.ndjson + "\n");

  const names = [];
  for (const line of sheets.ndjson.split("\n")) {
    if (!line.trim()) continue;
    try {
      const item = JSON.parse(line);
      if (item.name) names.push(item.name);
    } catch {}
  }

  for (const name of names) {
    const preview = await workbook.render({ sheetName: name, autoCrop: "all", scale: 1, format: "png" });
    const safe = name.replaceAll(/[^A-Za-z0-9_-]+/g, "_");
    await fs.writeFile(`${previewDir}/${safe}.png`, new Uint8Array(await preview.arrayBuffer()));
  }
}

if (mode === "build-consultry") {
  const outputDir = "/Users/jules/dev/consultry/output/xlsx";
  const previewOut = "/Users/jules/dev/consultry/tmp/financial-model/consultry-previews";
  await fs.mkdir(outputDir, { recursive: true });
  await fs.mkdir(previewOut, { recursive: true });

  const wb = Workbook.create();
  const summary = wb.worksheets.add("Summary");
  const assumptions = wb.worksheets.add("Assumptions");
  const revenue = wb.worksheets.add("Revenue Cohorts");
  const personnel = wb.worksheets.add("Personnel & Opex");
  const funding = wb.worksheets.add("Investment & Funding");
  const cash = wb.worksheets.add("Cash Plan");
  const pnl = wb.worksheets.add("Profitability");
  const scenarios = wb.worksheets.add("Scenarios");
  const checks = wb.worksheets.add("Checks & Sources");

  const GREEN = "#0F5B4D";
  const DARK = "#17332D";
  const MINT = "#DCEBE6";
  const PALE = "#F2F5F3";
  const WARM = "#FFF0DB";
  const RED = "#9C2F24";
  const WHITE = "#FFFFFF";
  const BLUE = "#0000FF";
  const LINK_GREEN = "#008000";
  const GRAY = "#59645F";
  const moneyFmt = '€#,##0;[Red](€#,##0);-';
  const money1Fmt = '€#,##0.0;[Red](€#,##0.0);-';
  const pctFmt = '0.0%;[Red](0.0%);-';
  const countFmt = '#,##0;[Red](#,##0);-';

  function title(sheet, text, subtitle = "") {
    sheet.showGridLines = false;
    sheet.getRange("A1:H1").merge();
    sheet.getRange("A1").values = [[text]];
    sheet.getRange("A1:H1").format = {
      fill: GREEN,
      font: { bold: true, color: WHITE, size: 18 },
      rowHeight: 30,
      verticalAlignment: "center",
    };
    if (subtitle) {
      sheet.getRange("A2:H2").merge();
      sheet.getRange("A2").values = [[subtitle]];
      sheet.getRange("A2:H2").format = {
        fill: PALE,
        font: { color: GRAY, italic: true, size: 10 },
        rowHeight: 22,
        verticalAlignment: "center",
      };
    }
  }

  function section(sheet, range, text) {
    sheet.getRange(range).merge();
    const anchor = range.split(":")[0];
    sheet.getRange(anchor).values = [[text]];
    sheet.getRange(range).format = {
      fill: DARK,
      font: { bold: true, color: WHITE },
      rowHeight: 22,
      verticalAlignment: "center",
    };
  }

  function header(sheet, range) {
    sheet.getRange(range).format = {
      fill: MINT,
      font: { bold: true, color: DARK },
      borders: { preset: "outside", style: "thin", color: GREEN },
      verticalAlignment: "center",
      wrapText: true,
    };
  }

  function totalStyle(sheet, range) {
    sheet.getRange(range).format = {
      fill: MINT,
      font: { bold: true, color: DARK },
      borders: { top: { style: "medium", color: GREEN }, bottom: { style: "double", color: GREEN } },
    };
  }

  // Assumptions
  title(assumptions, "Consultry KfW Financial Model", "Bottom-up base case | EUR, net | Version 12.07.2026");
  section(assumptions, "A4:D4", "Funding and debt");
  assumptions.getRange("A5:D11").values = [
    ["KfW StartGeld draw", 200000, "EUR", "Program cap; 120k investment / max. 80k operating cash"],
    ["Additional founder equity / capital reserve", 0, "EUR", "No additional equity assumed in the no-payroll base; existing statutory capital is separate"],
    ["Nominal annual interest", 0.0452, "%", "KfW conditions as of 10.07.2026; final rate at approval"],
    ["Loan term", 120, "months", "10 years"],
    ["Interest-only period", 24, "months", "2 years"],
    ["Monthly principal after grace", null, "EUR", "Straight-line principal per KfW repayment description"],
    ["Minimum internal cash reserve", 30000, "EUR", "Management liquidity floor; not a KfW rule"],
  ];
  assumptions.getRange("B10").formulas = [["=B5/(B8-B9)"]];
  section(assumptions, "A13:D13", "Commercial model");
  assumptions.getRange("A14:D23").values = [
    ["Existing design partners", 2, "count", "H&W Digital Solutions UG and Krallmann AG"],
    ["Design-partner license / activation revenue", 0, "EUR", "API-token cost pass-through only; excluded from revenue"],
    ["Average paid seats per commercial customer", 45, "seats", "Midpoint-style planning assumption within 15-80 employee ICP"],
    ["Founding-customer seat price", 50, "EUR/seat/month", "Locked GTM pilot land price"],
    ["Post-PMF seat price", 69, "EUR/seat/month", "Only new commercial cohorts from year 2"],
    ["Context Activation fixed price", 5000, "EUR/customer", "Separate scoped implementation package"],
    ["Recurring-revenue direct COGS", 0.12, "% of SaaS", "Model/provider usage plus variable service cost; validate after pilots"],
    ["SaaS cash collection lag", 1, "months", "Conservative one-month collection lag"],
    ["Employer on-cost factor", 0.20, "% of gross", "Validate with payroll provider"],
    ["Model horizon", 36, "months", "Three-year operating plan"],
  ];
  section(assumptions, "A25:D25", "Investment classification");
  assumptions.getRange("A26:D28").values = [
    ["External custom software / IP package", 110000, "EUR", "Capitalization and KfW investment treatment must be pre-cleared"],
    ["Development, test and security hardware", 10000, "EUR", "Quotes and inventory list required"],
    ["Total qualifying investment target", null, "EUR", "Must reach 120k for a 200k request with 80k operating cap"],
  ];
  assumptions.getRange("B28").formulas = [["=SUM(B26:B27)"]];
  assumptions.getRange("B5:B9").format.font = { color: BLUE };
  assumptions.getRange("B11").format.font = { color: BLUE };
  assumptions.getRange("B14:B23").format.font = { color: BLUE };
  assumptions.getRange("B26:B27").format.font = { color: BLUE };
  assumptions.getRange("B7").format.numberFormat = pctFmt;
  assumptions.getRange("B20").format.numberFormat = pctFmt;
  assumptions.getRange("B22").format.numberFormat = pctFmt;
  assumptions.getRange("B5:B6").format.numberFormat = moneyFmt;
  assumptions.getRange("B10:B11").format.numberFormat = moneyFmt;
  assumptions.getRange("B15").format.numberFormat = moneyFmt;
  assumptions.getRange("B16").format.numberFormat = countFmt;
  assumptions.getRange("B17:B19").format.numberFormat = moneyFmt;
  assumptions.getRange("B26:B28").format.numberFormat = moneyFmt;
  assumptions.getRange("A5:D28").format.borders = { preset: "inside", style: "thin", color: "#D6DEDA" };
  assumptions.getRange("A1:D28").format.font = { name: "Aptos", size: 10 };
  assumptions.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  assumptions.getRange("A:A").format.columnWidth = 39;
  assumptions.getRange("B:B").format.columnWidth = 18;
  assumptions.getRange("C:C").format.columnWidth = 17;
  assumptions.getRange("D:D").format.columnWidth = 64;
  assumptions.getRange("D5:D27").format.wrapText = true;
  assumptions.freezePanes.freezeRows(4);

  // Revenue cohorts
  title(revenue, "Revenue Cohorts", "Design partners excluded from revenue; commercial cohorts drive seats and Context Activation");
  revenue.getRange("A4:G5").values = [
    ["Cohort", "Type", "Start month", "Seats", "Seat price", "Activation", "Commercial note"],
    ["", "", "", "", "", "", ""],
  ];
  const monthLabels = Array.from({ length: 36 }, (_, i) => `M${i + 1}`);
  const monthNumbers = Array.from({ length: 36 }, (_, i) => i + 1);
  revenue.getRange("H4:AQ4").values = [monthLabels];
  revenue.getRange("H5:AQ5").values = [monthNumbers];
  header(revenue, "A4:AQ5");
  const cohortRows = [
    ["DP-01 H&W Digital Solutions UG", "Design partner", 3, 0, 0, 0, "API-token cost pass-through; no revenue"],
    ["DP-02 Krallmann AG", "Design partner", 4, 0, 0, 0, "API-token cost pass-through; no revenue"],
    ["C-01", "Commercial", 6, 45, 50, 5000, "Founding commercial cohort"],
    ["C-02", "Commercial", 8, 45, 50, 5000, "Founding commercial cohort"],
    ["C-03", "Commercial", 10, 45, 50, 5000, "Founding commercial cohort"],
    ["C-04", "Commercial", 12, 45, 50, 5000, "Founding commercial cohort"],
    ["C-05", "Commercial", 14, 45, 69, 5000, "Post-PMF new customer"],
    ["C-06", "Commercial", 15, 45, 69, 5000, "Post-PMF new customer"],
    ["C-07", "Commercial", 17, 45, 69, 5000, "Post-PMF new customer"],
    ["C-08", "Commercial", 18, 45, 69, 5000, "Post-PMF new customer"],
    ["C-09", "Commercial", 20, 45, 69, 5000, "Post-PMF new customer"],
    ["C-10", "Commercial", 21, 45, 69, 5000, "Post-PMF new customer"],
    ["C-11", "Commercial", 23, 45, 69, 5000, "Post-PMF new customer"],
    ["C-12", "Commercial", 24, 45, 69, 5000, "Post-PMF new customer"],
    ["C-13", "Commercial", 26, 45, 69, 5000, "Year-3 new customer"],
    ["C-14", "Commercial", 27, 45, 69, 5000, "Year-3 new customer"],
    ["C-15", "Commercial", 28, 45, 69, 5000, "Year-3 new customer"],
    ["C-16", "Commercial", 29, 45, 69, 5000, "Year-3 new customer"],
    ["C-17", "Commercial", 30, 45, 69, 5000, "Year-3 new customer"],
    ["C-18", "Commercial", 31, 45, 69, 5000, "Year-3 new customer"],
    ["C-19", "Commercial", 32, 45, 69, 5000, "Year-3 new customer"],
    ["C-20", "Commercial", 33, 45, 69, 5000, "Year-3 new customer"],
    ["C-21", "Commercial", 34, 45, 69, 5000, "Year-3 new customer"],
    ["C-22", "Commercial", 35, 45, 69, 5000, "Year-3 new customer"],
    ["C-23", "Commercial", 36, 45, 69, 5000, "Year-3 new customer"],
    ["C-24", "Commercial", 36, 45, 69, 5000, "Year-3 new customer"],
  ];
  revenue.getRange("A6:G31").values = cohortRows;
  revenue.getRange("C6:F31").format.font = { color: BLUE };
  revenue.getRange("E6:F31").format.numberFormat = moneyFmt;
  for (let r = 6; r <= 31; r++) {
    const formulas = [];
    for (let c = 8; c <= 43; c++) {
      const col = String.fromCharCode(64 + c); // H-Z only; corrected below for AA+
      formulas.push(null);
    }
    const rowFormulas = monthNumbers.map((_, idx) => {
      const columnIndex = idx + 8;
      let n = columnIndex;
      let col = "";
      while (n > 0) {
        const rem = (n - 1) % 26;
        col = String.fromCharCode(65 + rem) + col;
        n = Math.floor((n - 1) / 26);
      }
      return `=IF(${col}$5=$C${r},$F${r},0)+IF(AND(${col}$5>=$C${r},$B${r}="Commercial"),$D${r}*$E${r},0)`;
    });
    revenue.getRange(`H${r}:AQ${r}`).formulas = [rowFormulas];
  }
  revenue.getRange("A34:G37").values = [
    ["SaaS recurring revenue", null, null, null, null, null, "Recognized revenue"],
    ["Context Activation revenue", null, null, null, null, null, "Recognized on scoped activation"],
    ["Total recognized revenue", null, null, null, null, null, "SaaS + activation"],
    ["Customer cash receipts", null, null, null, null, null, "Activation current month + SaaS one-month lag"],
  ];
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 8;
    let n = columnIndex;
    let col = "";
    while (n > 0) {
      const rem = (n - 1) % 26;
      col = String.fromCharCode(65 + rem) + col;
      n = Math.floor((n - 1) / 26);
    }
    revenue.getRange(`${col}35`).formulas = [[`=SUMPRODUCT(($C$6:$C$31=${col}$5)*$F$6:$F$31)`]];
    revenue.getRange(`${col}36`).formulas = [[`=SUM(${col}6:${col}31)`]];
    revenue.getRange(`${col}34`).formulas = [[`=${col}36-${col}35`]];
    if (idx === 0) revenue.getRange(`${col}37`).formulas = [[`=${col}35`]];
    else {
      const prevIndex = columnIndex - 1;
      let pn = prevIndex;
      let prev = "";
      while (pn > 0) {
        const rem = (pn - 1) % 26;
        prev = String.fromCharCode(65 + rem) + prev;
        pn = Math.floor((pn - 1) / 26);
      }
      revenue.getRange(`${col}37`).formulas = [[`=${col}35+${prev}34`]];
    }
  }
  totalStyle(revenue, "A36:AQ37");
  revenue.getRange("H6:AQ37").format.numberFormat = moneyFmt;
  section(revenue, "A40:F40", "Annual revenue and customer summary");
  revenue.getRange("A41:D47").values = [
    ["Metric", "Year 1", "Year 2", "Year 3"],
    ["Paying customers at year-end", null, null, null],
    ["SaaS revenue", null, null, null],
    ["Context Activation revenue", null, null, null],
    ["Total recognized revenue", null, null, null],
    ["Customer cash receipts", null, null, null],
    ["End ARR", null, null, null],
  ];
  header(revenue, "A41:D41");
  revenue.getRange("B42:D42").formulas = [[
    '=COUNTIFS($B$6:$B$31,"Commercial",$C$6:$C$31,"<=12")',
    '=COUNTIFS($B$6:$B$31,"Commercial",$C$6:$C$31,"<=24")',
    '=COUNTIFS($B$6:$B$31,"Commercial",$C$6:$C$31,"<=36")',
  ]];
  revenue.getRange("B43:D47").formulas = [
    ["=SUM(H34:S34)", "=SUM(T34:AE34)", "=SUM(AF34:AQ34)"],
    ["=SUM(H35:S35)", "=SUM(T35:AE35)", "=SUM(AF35:AQ35)"],
    ["=SUM(H36:S36)", "=SUM(T36:AE36)", "=SUM(AF36:AQ36)"],
    ["=SUM(H37:S37)", "=SUM(T37:AE37)", "=SUM(AF37:AQ37)"],
    ["=S34*12", "=AE34*12", "=AQ34*12"],
  ];
  revenue.getRange("B43:D47").format.numberFormat = moneyFmt;
  revenue.getRange("B42:D42").format.numberFormat = countFmt;
  totalStyle(revenue, "A45:D47");
  revenue.getRange("A:A").format.columnWidth = 29;
  revenue.getRange("B:B").format.columnWidth = 16;
  revenue.getRange("C:F").format.columnWidth = 12;
  revenue.getRange("G:G").format.columnWidth = 38;
  revenue.getRange("H:AQ").format.columnWidth = 11;
  revenue.getRange("A1:AQ47").format.font = { name: "Aptos", size: 9 };
  revenue.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  revenue.freezePanes.freezeRows(5);
  revenue.freezePanes.freezeColumns(7);

  // Personnel and fixed operating costs
  title(personnel, "Personnel & Opex", "No fixed founder payroll in Year 1; up to 80k personnel only after separate funding");
  const pMonths = Array.from({ length: 36 }, (_, i) => `M${i + 1}`);
  personnel.getRange("A4:AK4").values = [["Gross monthly salary / cost driver", ...pMonths]];
  header(personnel, "A4:AK4");
  const salarySchedules = [
    ["CEO gross", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 0 : i < 24 ? 4000 : 4500)],
    ["CTO gross", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 0 : i < 24 ? 5000 : 5500)],
    ["CPO gross", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 0 : i < 24 ? 2500 : 3000)],
    ["Founding Engineer gross", ...Array.from({ length: 36 }, (_, i) => i >= 19 ? 5500 : 0)],
    ["Customer Success / Activation gross", ...Array.from({ length: 36 }, (_, i) => i >= 27 ? 4500 : 0)],
    ["Sales gross", ...Array.from({ length: 36 }, (_, i) => i >= 30 ? 5000 : 0)],
  ];
  personnel.getRange("A5:AK10").values = salarySchedules;
  personnel.getRange("B5:AK10").format.font = { color: BLUE };
  section(personnel, "A12:AK12", "Employer cost including 20% on-cost");
  personnel.getRange("A13:A19").values = [
    ["CEO employer cost"], ["CTO employer cost"], ["CPO employer cost"],
    ["Founding Engineer employer cost"], ["Customer Success employer cost"], ["Sales employer cost"], ["Total personnel cash cost"],
  ];
  for (let r = 13; r <= 18; r++) {
    const grossRow = r - 8;
    const formulas = monthNumbers.map((_, idx) => {
      const columnIndex = idx + 2;
      let n = columnIndex, col = "";
      while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
      return `=${col}${grossRow}*(1+'Assumptions'!$B$22)`;
    });
    personnel.getRange(`B${r}:AK${r}`).formulas = [formulas];
  }
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 2;
    let n = columnIndex, col = "";
    while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
    personnel.getRange(`${col}19`).formulas = [[`=SUM(${col}13:${col}18)`]];
  }
  totalStyle(personnel, "A19:AK19");
  section(personnel, "A22:AK22", "Fixed operating expenses");
  const opexSchedules = [
    ["Cloud / technical stack (fixed)", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 1000 : i < 24 ? 1250 : 2083.333333)],
    ["Sales / marketing / travel", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 833.333333 : i < 24 ? 1666.666667 : 3333.333333)],
    ["Legal / accounting / insurance", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 833.333333 : i < 24 ? 1250 : 1666.666667)],
    ["Workspace / communication / general tools", ...Array.from({ length: 36 }, (_, i) => i < 12 ? 500 : i < 24 ? 833.333333 : 1666.666667)],
  ];
  personnel.getRange("A23:AK26").values = opexSchedules;
  personnel.getRange("B23:AK26").format.font = { color: BLUE };
  personnel.getRange("A27:A29").values = [["Total fixed opex"], ["Direct recurring-revenue COGS"], ["Total operating cash cost"]];
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 2;
    let n = columnIndex, col = "";
    while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
    const revIndex = idx + 8;
    let rn = revIndex, rcol = "";
    while (rn > 0) { const rem = (rn - 1) % 26; rcol = String.fromCharCode(65 + rem) + rcol; rn = Math.floor((rn - 1) / 26); }
    personnel.getRange(`${col}27`).formulas = [[`=SUM(${col}23:${col}26)`]];
    personnel.getRange(`${col}28`).formulas = [[`='Revenue Cohorts'!${rcol}34*'Assumptions'!$B$20`]];
    personnel.getRange(`${col}29`).formulas = [[`=${col}19+${col}27+${col}28`]];
  }
  totalStyle(personnel, "A27:AK29");
  personnel.getRange("B5:AK29").format.numberFormat = moneyFmt;
  personnel.getRange("A32:D38").values = [
    ["Annual summary", "Year 1", "Year 2", "Year 3"],
    ["Founder employer cost", null, null, null],
    ["Additional employee employer cost", null, null, null],
    ["Total personnel", null, null, null],
    ["Fixed opex", null, null, null],
    ["Direct COGS", null, null, null],
    ["Total operating cash cost", null, null, null],
  ];
  header(personnel, "A32:D32");
  personnel.getRange("B33:D38").formulas = [
    ["=SUM(B13:M15)", "=SUM(N13:Y15)", "=SUM(Z13:AK15)"],
    ["=SUM(B16:M18)", "=SUM(N16:Y18)", "=SUM(Z16:AK18)"],
    ["=SUM(B19:M19)", "=SUM(N19:Y19)", "=SUM(Z19:AK19)"],
    ["=SUM(B27:M27)", "=SUM(N27:Y27)", "=SUM(Z27:AK27)"],
    ["=SUM(B28:M28)", "=SUM(N28:Y28)", "=SUM(Z28:AK28)"],
    ["=SUM(B29:M29)", "=SUM(N29:Y29)", "=SUM(Z29:AK29)"],
  ];
  personnel.getRange("B33:D38").format.numberFormat = moneyFmt;
  totalStyle(personnel, "A35:D38");
  personnel.getRange("A:A").format.columnWidth = 40;
  personnel.getRange("B:AK").format.columnWidth = 11;
  personnel.getRange("A1:AK38").format.font = { name: "Aptos", size: 9 };
  personnel.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  personnel.freezePanes.freezeRows(4);
  personnel.freezePanes.freezeColumns(1);

  // Investment, funding and debt schedule
  title(funding, "Investment & Funding", "120k qualifying investment and 200k KfW debt; no additional equity in no-payroll base");
  funding.getRange("A4:AK4").values = [["Investment / funding item", ...pMonths]];
  header(funding, "A4:AK4");
  const softwareSchedule = [20000, 0, 20000, 0, 20000, 0, 20000, 0, 15000, 0, 15000, 0, ...Array(24).fill(0)];
  const hardwareSchedule = [6000, 0, 0, 4000, ...Array(32).fill(0)];
  const loanSchedule = [200000, ...Array(35).fill(0)];
  const equitySchedule = Array(36).fill(0);
  funding.getRange("A5:AK8").values = [
    ["External software / IP milestones", ...softwareSchedule],
    ["Hardware", ...hardwareSchedule],
    ["Total investment cash", ...Array(36).fill(null)],
    ["", ...Array(36).fill(null)],
  ];
  funding.getRange("A10:AK12").values = [
    ["KfW draw", ...loanSchedule],
    ["Founder equity / capital reserve", ...equitySchedule],
    ["Total financing cash", ...Array(36).fill(null)],
  ];
  funding.getRange("B5:AK6").format.font = { color: BLUE };
  funding.getRange("B10:AK11").format.font = { color: BLUE };
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 2;
    let n = columnIndex, col = "";
    while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
    funding.getRange(`${col}7`).formulas = [[`=SUM(${col}5:${col}6)`]];
    funding.getRange(`${col}12`).formulas = [[`=SUM(${col}10:${col}11)`]];
  }
  totalStyle(funding, "A7:AK7");
  totalStyle(funding, "A12:AK12");
  section(funding, "A15:AK15", "Debt schedule");
  funding.getRange("A16:A19").values = [["Opening principal"], ["Interest"], ["Principal repayment"], ["Closing principal"]];
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 2;
    let n = columnIndex, col = "";
    while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
    if (idx === 0) funding.getRange(`${col}16`).formulas = [["='Assumptions'!$B$5"]];
    else {
      let pn = columnIndex - 1, prev = "";
      while (pn > 0) { const rem = (pn - 1) % 26; prev = String.fromCharCode(65 + rem) + prev; pn = Math.floor((pn - 1) / 26); }
      funding.getRange(`${col}16`).formulas = [[`=${prev}19`]];
    }
    funding.getRange(`${col}17`).formulas = [[`=${col}16*'Assumptions'!$B$7/12`]];
    funding.getRange(`${col}18`).formulas = [[`=IF(${idx + 1}>'Assumptions'!$B$9,MIN('Assumptions'!$B$10,${col}16),0)`]];
    funding.getRange(`${col}19`).formulas = [[`=${col}16-${col}18`]];
  }
  funding.getRange("B5:AK19").format.numberFormat = moneyFmt;
  totalStyle(funding, "A19:AK19");
  funding.getRange("A22:D27").values = [
    ["Annual / funding summary", "Year 1", "Year 2", "Year 3"],
    ["Investment cash", null, null, null],
    ["KfW funding", null, null, null],
    ["Founder equity", null, null, null],
    ["Interest", null, null, null],
    ["Principal", null, null, null],
  ];
  header(funding, "A22:D22");
  funding.getRange("B23:D27").formulas = [
    ["=SUM(B7:M7)", "=SUM(N7:Y7)", "=SUM(Z7:AK7)"],
    ["=SUM(B10:M10)", "=SUM(N10:Y10)", "=SUM(Z10:AK10)"],
    ["=SUM(B11:M11)", "=SUM(N11:Y11)", "=SUM(Z11:AK11)"],
    ["=SUM(B17:M17)", "=SUM(N17:Y17)", "=SUM(Z17:AK17)"],
    ["=SUM(B18:M18)", "=SUM(N18:Y18)", "=SUM(Z18:AK18)"],
  ];
  funding.getRange("B23:D27").format.numberFormat = moneyFmt;
  funding.getRange("A:A").format.columnWidth = 39;
  funding.getRange("B:AK").format.columnWidth = 11;
  funding.getRange("A1:AK27").format.font = { name: "Aptos", size: 9 };
  funding.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  funding.freezePanes.freezeRows(4);
  funding.freezePanes.freezeColumns(1);

  // Cash plan
  title(cash, "Cash Plan", "Monthly cash view with one-month SaaS collection lag and no fixed Year-1 founder payroll");
  cash.getRange("A4:AK4").values = [["Cash flow item", ...pMonths]];
  header(cash, "A4:AK4");
  cash.getRange("A5:A21").values = [
    ["Beginning cash"], ["KfW draw"], ["Founder equity"], ["Customer cash receipts"], ["Total cash inflow"], [""],
    ["Investment cash"], ["Personnel"], ["Fixed opex"], ["Direct COGS"], ["Interest"], ["Principal"], ["Total cash outflow"], [""],
    ["Net monthly cash flow"], ["Ending cash"], ["Headroom vs. 30k reserve"],
  ];
  for (let idx = 0; idx < 36; idx++) {
    const columnIndex = idx + 2;
    let n = columnIndex, col = "";
    while (n > 0) { const rem = (n - 1) % 26; col = String.fromCharCode(65 + rem) + col; n = Math.floor((n - 1) / 26); }
    const revIndex = idx + 8;
    let rn = revIndex, rcol = "";
    while (rn > 0) { const rem = (rn - 1) % 26; rcol = String.fromCharCode(65 + rem) + rcol; rn = Math.floor((rn - 1) / 26); }
    if (idx === 0) cash.getRange(`${col}5`).formulas = [["=0"]];
    else {
      let pn = columnIndex - 1, prev = "";
      while (pn > 0) { const rem = (pn - 1) % 26; prev = String.fromCharCode(65 + rem) + prev; pn = Math.floor((pn - 1) / 26); }
      cash.getRange(`${col}5`).formulas = [[`=${prev}20`]];
    }
    cash.getRange(`${col}6`).formulas = [[`='Investment & Funding'!${col}10`]];
    cash.getRange(`${col}7`).formulas = [[`='Investment & Funding'!${col}11`]];
    cash.getRange(`${col}8`).formulas = [[`='Revenue Cohorts'!${rcol}37`]];
    cash.getRange(`${col}9`).formulas = [[`=SUM(${col}6:${col}8)`]];
    cash.getRange(`${col}11`).formulas = [[`='Investment & Funding'!${col}7`]];
    cash.getRange(`${col}12`).formulas = [[`='Personnel & Opex'!${col}19`]];
    cash.getRange(`${col}13`).formulas = [[`='Personnel & Opex'!${col}27`]];
    cash.getRange(`${col}14`).formulas = [[`='Personnel & Opex'!${col}28`]];
    cash.getRange(`${col}15`).formulas = [[`='Investment & Funding'!${col}17`]];
    cash.getRange(`${col}16`).formulas = [[`='Investment & Funding'!${col}18`]];
    cash.getRange(`${col}17`).formulas = [[`=SUM(${col}11:${col}16)`]];
    cash.getRange(`${col}19`).formulas = [[`=${col}9-${col}17`]];
    cash.getRange(`${col}20`).formulas = [[`=${col}5+${col}19`]];
    cash.getRange(`${col}21`).formulas = [[`=${col}20-'Assumptions'!$B$11`]];
  }
  totalStyle(cash, "A9:AK9");
  totalStyle(cash, "A17:AK17");
  totalStyle(cash, "A19:AK21");
  cash.getRange("B5:AK21").format.numberFormat = moneyFmt;
  cash.getRange("B21:AK21").conditionalFormats.add("cellIs", { operator: "lessThan", formula: 0, format: { fill: "#F8D7DA", font: { color: RED, bold: true } } });
  cash.getRange("A24:D29").values = [
    ["Cash summary", "Year 1", "Year 2", "Year 3"],
    ["Customer cash receipts", null, null, null],
    ["Total operating cash cost", null, null, null],
    ["Investment cash", null, null, null],
    ["Debt service", null, null, null],
    ["Ending cash", null, null, null],
  ];
  header(cash, "A24:D24");
  cash.getRange("B25:D29").formulas = [
    ["=SUM(B8:M8)", "=SUM(N8:Y8)", "=SUM(Z8:AK8)"],
    ["=SUM(B12:M14)", "=SUM(N12:Y14)", "=SUM(Z12:AK14)"],
    ["=SUM(B11:M11)", "=SUM(N11:Y11)", "=SUM(Z11:AK11)"],
    ["=SUM(B15:M16)", "=SUM(N15:Y16)", "=SUM(Z15:AK16)"],
    ["=M20", "=Y20", "=AK20"],
  ];
  cash.getRange("B25:D29").format.numberFormat = moneyFmt;
  totalStyle(cash, "A29:D29");
  cash.getRange("A:A").format.columnWidth = 34;
  cash.getRange("B:AK").format.columnWidth = 11;
  cash.getRange("A1:AK29").format.font = { name: "Aptos", size: 9 };
  cash.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  cash.freezePanes.freezeRows(4);
  cash.freezePanes.freezeColumns(1);

  // Profitability
  title(pnl, "Profitability", "KfW-style three-year forecast, net, before depreciation");
  pnl.getRange("A4:D4").values = [["Position", "Year 1", "Year 2", "Year 3"]];
  header(pnl, "A4:D4");
  pnl.getRange("A5:A22").values = [
    ["SaaS revenue"], ["Context Activation revenue"], ["Total net revenue"], ["Direct COGS"], ["Gross profit"], [""],
    ["Personnel"], ["Fixed opex"], ["EBITDA before depreciation"], ["Interest"], ["Result before tax and depreciation"],
    ["Indicative cash taxes"], ["Result after tax before depreciation"], ["Principal - cash only"], ["Cash after debt service before investment"], ["End ARR"], ["Paying customers"], ["EBITDA / debt service"],
  ];
  pnl.getRange("B5:D22").formulas = [
    ["='Revenue Cohorts'!B43", "='Revenue Cohorts'!C43", "='Revenue Cohorts'!D43"],
    ["='Revenue Cohorts'!B44", "='Revenue Cohorts'!C44", "='Revenue Cohorts'!D44"],
    ["=SUM(B5:B6)", "=SUM(C5:C6)", "=SUM(D5:D6)"],
    ["='Personnel & Opex'!B37", "='Personnel & Opex'!C37", "='Personnel & Opex'!D37"],
    ["=B7-B8", "=C7-C8", "=D7-D8"],
    ["=0", "=0", "=0"],
    ["='Personnel & Opex'!B35", "='Personnel & Opex'!C35", "='Personnel & Opex'!D35"],
    ["='Personnel & Opex'!B36", "='Personnel & Opex'!C36", "='Personnel & Opex'!D36"],
    ["=B9-B11-B12", "=C9-C11-C12", "=D9-D11-D12"],
    ["='Investment & Funding'!B26", "='Investment & Funding'!C26", "='Investment & Funding'!D26"],
    ["=B13-B14", "=C13-C14", "=D13-D14"],
    ["=0", "=0", "=0"],
    ["=B15-B16", "=C15-C16", "=D15-D16"],
    ["='Investment & Funding'!B27", "='Investment & Funding'!C27", "='Investment & Funding'!D27"],
    ["=B13-B14-B18", "=C13-C14-C18", "=D13-D14-D18"],
    ["='Revenue Cohorts'!B47", "='Revenue Cohorts'!C47", "='Revenue Cohorts'!D47"],
    ["='Revenue Cohorts'!B42", "='Revenue Cohorts'!C42", "='Revenue Cohorts'!D42"],
    ["=IF((B14+B18)>0,B13/(B14+B18),0)", "=IF((C14+C18)>0,C13/(C14+C18),0)", "=IF((D14+D18)>0,D13/(D14+D18),0)"],
  ];
  pnl.getRange("B5:D21").format.numberFormat = moneyFmt;
  pnl.getRange("B22:D22").format.numberFormat = "0.0x";
  pnl.getRange("B21:D21").format.numberFormat = countFmt;
  totalStyle(pnl, "A7:D9");
  totalStyle(pnl, "A13:D19");
  pnl.getRange("A24:D27").values = [
    ["Interpretation", "Year 1", "Year 2", "Year 3"],
    ["Commercial posture", "4 paying customers + 2 non-revenue design partners", "8 new paying customers", "12 new paying customers"],
    ["Hiring posture", "Founders unpaid; no fixed payroll", "Founder payroll begins; engineer from M20 after gates", "CS from M28; Sales from M31"],
    ["Tax note", "Loss year", "Near break-even", "Loss carryforward likely; tax advisor to confirm"],
  ];
  header(pnl, "A24:D24");
  pnl.getRange("A:A").format.columnWidth = 42;
  pnl.getRange("B:D").format.columnWidth = 24;
  pnl.getRange("B24:D27").format.wrapText = true;
  pnl.getRange("A1:D27").format.font = { name: "Aptos", size: 10 };
  pnl.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };

  // Scenarios
  title(scenarios, "Year-1 Scenarios", "No fixed founder payroll; conditional personnel spending requires matched additional funding");
  scenarios.getRange("A4:H4").values = [["Scenario", "Cash receipt factor", "Activation factor", "Fixed-opex factor", "Conditional Year-1 personnel spend", "Year-1 ending cash", "Additional funding for 30k Year-1 reserve", "Interpretation"]];
  header(scenarios, "A4:H4");
  scenarios.getRange("A5:E8").values = [
    ["Base - no fixed founder payroll", 1.0, 1.0, 1.0, 0],
    ["Downside", 0.5, 0.5, 0.85, 0],
    ["LOI-only / no paid customers", 0.0, 0.0, 0.80, 0],
    ["Full 80k personnel release without extra funding", 1.0, 1.0, 1.0, 80000],
  ];
  scenarios.getRange("B5:E8").format.font = { color: BLUE };
  scenarios.getRange("B5:D8").format.numberFormat = pctFmt;
  scenarios.getRange("E5:E8").format.numberFormat = moneyFmt;
  for (let r = 5; r <= 8; r++) {
    scenarios.getRange(`F${r}`).formulas = [[
      `='Assumptions'!$B$5+'Assumptions'!$B$6+(('Revenue Cohorts'!$B$46-'Revenue Cohorts'!$B$44)*B${r})+('Revenue Cohorts'!$B$44*C${r})-'Investment & Funding'!$B$23-E${r}-('Personnel & Opex'!$B$36*D${r})-('Personnel & Opex'!$B$37*B${r})-'Investment & Funding'!$B$26`,
    ]];
    scenarios.getRange(`G${r}`).formulas = [[
      `=MAX(0,'Investment & Funding'!$B$23+E${r}+('Personnel & Opex'!$B$36*D${r})+('Personnel & Opex'!$B$37*B${r})+'Investment & Funding'!$B$26+'Assumptions'!$B$11-'Assumptions'!$B$5-((('Revenue Cohorts'!$B$46-'Revenue Cohorts'!$B$44)*B${r})+('Revenue Cohorts'!$B$44*C${r})))`,
    ]];
  }
  scenarios.getRange("H5:H8").values = [
    ["Four paid customers, four activations, monthly SaaS with one-month payment lag"],
    ["Only half the commercial cash arrives; non-payroll opex gate applied; founder payroll remains zero"],
    ["Two design partners validate the product but generate no revenue; no fixed founder payroll"],
    ["Violates funding gate: full 80k spend creates a negative cash balance without additional funds"],
  ];
  scenarios.getRange("F5:G8").format.numberFormat = moneyFmt;
  scenarios.getRange("F5:F8").conditionalFormats.add("cellIs", { operator: "lessThan", formula: 30000, format: { fill: "#F8D7DA", font: { color: RED, bold: true } } });
  scenarios.getRange("A10:H12").values = [
    ["Critical conclusion", null, null, null, null, null, null, null],
    ["The no-payroll base is financed by the 200k KfW loan and customer receipts without additional equity. Minimum 36-month cash is about 41.0k, above the 30k management floor.", null, null, null, null, null, null, null],
    ["The full optional 80k personnel envelope is not financed in the base. Releasing it without matched funding pushes the 36-month trough to about -39.0k; at least about 69.0k additional liquidity is required to retain the 30k floor.", null, null, null, null, null, null, null],
  ];
  scenarios.getRange("A10:H10").merge();
  scenarios.getRange("A11:H11").merge();
  scenarios.getRange("A12:H12").merge();
  scenarios.getRange("A10:H10").format = { fill: DARK, font: { color: WHITE, bold: true } };
  scenarios.getRange("A11:H12").format = { fill: WARM, font: { color: DARK, bold: true }, wrapText: true, rowHeight: 34 };
  scenarios.getRange("A:A").format.columnWidth = 30;
  scenarios.getRange("B:G").format.columnWidth = 18;
  scenarios.getRange("H:H").format.columnWidth = 55;
  scenarios.getRange("H5:H8").format.wrapText = true;
  scenarios.getRange("A1:H12").format.font = { name: "Aptos", size: 10 };
  scenarios.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };

  // Summary
  title(summary, "Consultry KfW 200k - Critical Base Case", "Four paid customers in Year 1; two token-cost design partners excluded from revenue");
  summary.getRange("A4:H4").values = [["Key output", "Year 1", "Year 2", "Year 3", "Unit", "Bank interpretation", "Status", "Source"]];
  header(summary, "A4:H4");
  summary.getRange("A5:A13").values = [
    ["Paying customers at year-end"], ["Net revenue"], ["End ARR"], ["EBITDA before depreciation"],
    ["Ending cash"], ["Debt service"], ["EBITDA / debt service"], ["Additional equity in base"], ["Qualifying investment"],
  ];
  summary.getRange("B5:D13").formulas = [
    ["='Profitability'!B21", "='Profitability'!C21", "='Profitability'!D21"],
    ["='Profitability'!B7", "='Profitability'!C7", "='Profitability'!D7"],
    ["='Profitability'!B20", "='Profitability'!C20", "='Profitability'!D20"],
    ["='Profitability'!B13", "='Profitability'!C13", "='Profitability'!D13"],
    ["='Cash Plan'!B29", "='Cash Plan'!C29", "='Cash Plan'!D29"],
    ["='Investment & Funding'!B26+'Investment & Funding'!B27", "='Investment & Funding'!C26+'Investment & Funding'!C27", "='Investment & Funding'!D26+'Investment & Funding'!D27"],
    ["='Profitability'!B22", "='Profitability'!C22", "='Profitability'!D22"],
    ["='Assumptions'!B6", "=0", "=0"],
    ["='Assumptions'!B28", "=0", "=0"],
  ];
  summary.getRange("E5:E13").values = [["count"], ["EUR"], ["EUR"], ["EUR"], ["EUR"], ["EUR"], ["x"], ["EUR"], ["EUR"]];
  summary.getRange("F5:H13").values = [
    ["Separate from 2 non-revenue design partners", "Plan assumption", "Revenue Cohorts"],
    ["Bottom-up cohort revenue, not a top-down plug", "Plan assumption", "Revenue Cohorts"],
    ["Year-end recurring run-rate", "Plan assumption", "Revenue Cohorts"],
    ["Positive Year-1 EBITDA relies on unpaid founder work; not normalized", "Calculated", "Personnel & Opex"],
    ["Must remain above 30k internal target", "Calculated", "Cash Plan"],
    ["Principal begins in Year 3", "Calculated", "Debt schedule"],
    ["Year 3 is the meaningful service year", "Calculated", "Profitability"],
    ["No additional equity in no-payroll base; statutory capital separate", "Plan assumption", "Scenarios"],
    ["Required for 200k request with 80k operating cap", "Pre-clear", "KfW / bank"],
  ];
  summary.getRange("B6:D11").format.numberFormat = moneyFmt;
  summary.getRange("B5:D5").format.numberFormat = countFmt;
  summary.getRange("B12:D12").format.numberFormat = moneyFmt;
  summary.getRange("B13:D13").format.numberFormat = moneyFmt;
  summary.getRange("B11:D11").format.numberFormat = "0.0x";
  summary.getRange("B5:D13").format.font = { color: LINK_GREEN };
  summary.getRange("G5:G13").conditionalFormats.add("containsText", { text: "Critical", format: { fill: "#F8D7DA", font: { color: RED, bold: true } } });
  section(summary, "A16:H16", "Critical lender conclusions");
  summary.getRange("A17:H20").values = [
    ["1", "The two existing LOIs validate access and usage only. They are explicitly excluded from revenue and price validation.", null, null, null, null, null, null],
    ["2", "Year-1 revenue is 56k recognized and 47k cash receipts: four commercial customers, four 5k Context Activations, and one-month SaaS collection lag.", null, null, null, null, null, null],
    ["3", "Year-1 committed founder payroll is zero. The founders contribute work without a fixed salary until separate funding; private livelihood and the absence of deferred salary claims must be documented.", null, null, null, null, null, null],
    ["4", "The optional personnel envelope is capped at 80k and is not part of the funded base. Full release needs at least about 69k matched additional liquidity to preserve the 30k full-horizon reserve.", null, null, null, null, null, null],
  ];
  for (let r = 17; r <= 20; r++) summary.getRange(`B${r}:H${r}`).merge();
  summary.getRange("A17:A20").format = { fill: MINT, font: { bold: true, color: GREEN }, horizontalAlignment: "center" };
  summary.getRange("B17:H20").format = { fill: PALE, wrapText: true, rowHeight: 30 };
  summary.getRange("A:A").format.columnWidth = 34;
  summary.getRange("B:D").format.columnWidth = 18;
  summary.getRange("E:E").format.columnWidth = 12;
  summary.getRange("F:F").format.columnWidth = 46;
  summary.getRange("G:G").format.columnWidth = 16;
  summary.getRange("H:H").format.columnWidth = 22;
  summary.getRange("F5:H13").format.wrapText = true;
  summary.getRange("A1:H20").format.font = { name: "Aptos", size: 10 };
  summary.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };
  summary.freezePanes.freezeRows(4);

  // Checks and sources
  title(checks, "Checks & Sources", "Model controls and source register");
  checks.getRange("A4:G4").values = [["Check", "Actual", "Expected", "Difference", "Tolerance", "Status", "Fix / note"]];
  header(checks, "A4:G4");
  checks.getRange("A5:A13").values = [
    ["Investment total"], ["KfW amount"], ["Additional equity base"], ["Year-1 personnel cap"], ["Year-1 revenue tie"],
    ["Year-1 cash roll-forward"], ["Debt closing after M36"], ["Minimum Year-1 reserve"], ["Minimum full-horizon reserve"],
  ];
  checks.getRange("B5:C13").formulas = [
    ["='Assumptions'!B28", "=120000"],
    ["='Assumptions'!B5", "=200000"],
    ["='Assumptions'!B6", "=0"],
    ["='Personnel & Opex'!B35", "=80000"],
    ["='Profitability'!B7", "='Revenue Cohorts'!B45"],
    ["='Cash Plan'!B29", "='Cash Plan'!M20"],
    ["='Investment & Funding'!AK19", "=175000"],
    ["=MIN('Cash Plan'!B20:M20)", "='Assumptions'!B11"],
    ["=MIN('Cash Plan'!B20:AK20)", "='Assumptions'!B11"],
  ];
  for (let r = 5; r <= 13; r++) {
    checks.getRange(`D${r}`).formulas = [[`=B${r}-C${r}`]];
    checks.getRange(`E${r}`).values = [[r >= 12 ? 0 : 0.01]];
    checks.getRange(`F${r}`).formulas = [[r === 8 ? `=IF(B${r}<=C${r},"OK","FAIL")` : r >= 12 ? `=IF(B${r}>=C${r},"OK","FAIL")` : `=IF(ABS(D${r})<=E${r},"OK","FAIL")`]];
  }
  checks.getRange("G5:G13").values = [
    ["Must equal 120k"], ["Program cap"], ["No additional equity in no-payroll base"], ["Must not exceed 80k; committed base is zero"], ["Annual summary tie"],
    ["Cash summary tie"], ["200k less 12 months x 2,083.33 principal"], ["Internal management target"], ["Must hold through Year 2 trough"],
  ];
  checks.getRange("B5:E13").format.numberFormat = moneyFmt;
  checks.getRange("F5:F13").conditionalFormats.add("containsText", { text: "OK", format: { fill: "#D4EDDA", font: { color: GREEN, bold: true } } });
  checks.getRange("F5:F13").conditionalFormats.add("containsText", { text: "FAIL", format: { fill: "#F8D7DA", font: { color: RED, bold: true } } });
  checks.getRange("A14:B14").values = [["MODEL STATUS", null]];
  checks.getRange("B14").formulas = [["=IF(COUNTIF(F5:F13,\"FAIL\")=0,\"PASS\",\"FAIL\")"]];
  totalStyle(checks, "A14:B14");
  checks.getRange("B14").conditionalFormats.add("containsText", { text: "PASS", format: { fill: "#D4EDDA", font: { color: GREEN, bold: true } } });
  checks.getRange("B14").conditionalFormats.add("containsText", { text: "FAIL", format: { fill: "#F8D7DA", font: { color: RED, bold: true } } });
  section(checks, "A16:G16", "Sources and assumption audit");
  checks.getRange("A17:G24").values = [
    ["Item", "Value / use", "Unit", "As of", "Source type", "Source / reference", "Audit note"],
    ["KfW loan cap / operating cap", "200k / 80k", "EUR", "2026-07-12", "Official", "https://www.kfw.de/inlandsfoerderung/Unternehmen/Gr%C3%BCnden-Nachfolgen/F%C3%B6rderprodukte/ERP-Gr%C3%BCnderkredit-Startgeld-%28067%29/", "Official page confirms up to 200k, max 80k working capital"],
    ["KfW interest", "4.52%", "% p.a.", "2026-07-10", "Official", "https://www.kfw-formularsammlung.de/KonditionenanzeigerINet/KonditionenAnzeiger", "Final rate set at approval"],
    ["Product/pricing", "50 / 69 / 5k", "EUR", "2026-07-12", "Internal canon + founder decision", "/Users/jules/dev/consultry/product-definition/latest/Consultry-GTM-Decisions-v1.0.md", "5k activation package confirmed by user; paid cohort still to validate"],
    ["Design partners", "2, token cost only", "count", "2026-07-12", "User-provided", "H&W Digital Solutions UG; Krallmann AG", "LOIs validate use, not price; excluded from revenue"],
    ["Product scope", "Vision v2.7 / MVP separate", "n/a", "2026-07-12", "Internal canon", "/Users/jules/dev/consultry/product-definition/latest/Consultry-Product-Vision-v1.0.md", "No full Assetization or full OS delivery in Year 1"],
    ["Founder payroll", "0 fixed Year 1; optional cap 80k", "EUR", "2026-07-12", "Founder instruction", "No fixed founder salary before separate additional funding", "Document private livelihood and no deferred compensation; legal/payroll review required"],
    ["OmniSEC workbook", "Structure only", "n/a", "2026-07-12", "Reference", "/Users/jules/dev/consultry/OmniSEC_FinancialPlanning_Sheet.xlsx", "Used for separation of funding, headcount, revenue, cost and scenarios; no OmniSEC business figures imported; reference contains #REF errors"],
  ];
  header(checks, "A17:G17");
  checks.getRange("A17:G24").format.wrapText = true;
  checks.getRange("A:A").format.columnWidth = 34;
  checks.getRange("B:E").format.columnWidth = 18;
  checks.getRange("F:F").format.columnWidth = 62;
  checks.getRange("G:G").format.columnWidth = 48;
  checks.getRange("A1:G24").format.font = { name: "Aptos", size: 9 };
  checks.getRange("A1").format.font = { name: "Aptos Display", size: 18, bold: true, color: WHITE };

  // Apply linked-formula color to output/calculation sheets.
  for (const sheet of [summary, cash, pnl, checks]) {
    const used = sheet.getUsedRange();
    used.format.verticalAlignment = "center";
  }

  const inspectSummary = await wb.inspect({ kind: "table", range: "Summary!A1:H20", include: "values,formulas", tableMaxRows: 30, tableMaxCols: 10, maxChars: 12000 });
  process.stdout.write(inspectSummary.ndjson + "\n");
  const inspectCash = await wb.inspect({ kind: "table", range: "Cash Plan!A4:M21", include: "values,formulas", tableMaxRows: 25, tableMaxCols: 14, maxChars: 18000 });
  process.stdout.write(inspectCash.ndjson + "\n");
  const inspectPnl = await wb.inspect({ kind: "table", range: "Profitability!A4:D22", include: "values,formulas", tableMaxRows: 25, tableMaxCols: 6, maxChars: 12000 });
  process.stdout.write(inspectPnl.ndjson + "\n");
  const inspectChecks = await wb.inspect({ kind: "table", range: "Checks & Sources!A4:G14", include: "values,formulas", tableMaxRows: 20, tableMaxCols: 8, maxChars: 12000 });
  process.stdout.write(inspectChecks.ndjson + "\n");
  const errorScan = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "formula error scan", maxChars: 12000 });
  process.stdout.write(errorScan.ndjson + "\n");

  for (const name of ["Summary", "Assumptions", "Revenue Cohorts", "Personnel & Opex", "Investment & Funding", "Cash Plan", "Profitability", "Scenarios", "Checks & Sources"]) {
    const preview = await wb.render({ sheetName: name, autoCrop: "all", scale: 1, format: "png" });
    const safe = name.replaceAll(/[^A-Za-z0-9_-]+/g, "_");
    await fs.writeFile(`${previewOut}/${safe}.png`, new Uint8Array(await preview.arrayBuffer()));
  }

  const out = await SpreadsheetFile.exportXlsx(wb);
  await out.save(`${outputDir}/Consultry_KfW_Finanzmodell_200k.xlsx`);
}
