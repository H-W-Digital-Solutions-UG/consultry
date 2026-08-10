import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const sourcePath = "/Users/jules/Downloads/Cap-Table-Modell.xlsx";
const outputDir = "/Users/jules/dev/consultry/tmp/cap-table-inspect/rendered";

await fs.mkdir(outputDir, { recursive: true });

const input = await FileBlob.load(sourcePath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheetSummary = await workbook.inspect({
  kind: "sheet",
  include: "id,name",
  maxChars: 12000,
});

const workbookSummary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 18000,
  tableMaxRows: 10,
  tableMaxCols: 12,
  tableMaxCellChars: 100,
});

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan",
  maxChars: 12000,
});

const keyRanges = [];
for (const range of [
  "Cap Table!A5:F16",
  "Cap Table!A27:F56",
  "Szenarien!A11:M16",
  "Szenarien!A26:E32",
]) {
  const inspected = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 40,
    tableMaxCols: 14,
    maxChars: 18000,
  });
  keyRanges.push({ range, ndjson: inspected.ndjson });
}

const renders = [];
for (const sheet of workbook.worksheets.items) {
  const safeName = sheet.name.replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "") || "sheet";
  const preview = await workbook.render({
    sheetName: sheet.name,
    autoCrop: "all",
    scale: 1.5,
    format: "png",
  });
  const previewPath = path.join(outputDir, `${safeName}.png`);
  await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));
  renders.push({ name: sheet.name, previewPath });
}

console.log(JSON.stringify({
  sheetSummary: sheetSummary.ndjson,
  workbookSummary: workbookSummary.ndjson,
  formulaErrors: formulaErrors.ndjson,
  keyRanges,
  renders,
}, null, 2));
