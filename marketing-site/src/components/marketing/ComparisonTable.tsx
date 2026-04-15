import type { ComparisonTableContent } from "@/lib/content/de/product";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { cn } from "@/lib/cn";

type ComparisonTableProps = {
  content: ComparisonTableContent;
};

export function ComparisonTable({ content }: ComparisonTableProps) {
  return (
    <section className="section-shell">
      <div className="content-shell">
        <MotionReveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-4">{content.overline}</p>
          <h2 className="display-section text-balance">{content.title}</h2>
          {content.body && (
            <p className="body-lg mt-4 text-balance">{content.body}</p>
          )}
        </MotionReveal>

        <MotionReveal className="mx-auto grid gap-3 md:hidden" delay={0.08}>
          {content.rows.map((row) => (
            <article
              className="overflow-hidden rounded-[22px] border border-[rgba(74,71,68,0.68)] bg-[rgba(38,33,30,0.95)] shadow-[0_14px_30px_rgba(0,0,0,0.16)]"
              key={row.feature}
            >
              <div className="border-b border-[rgba(74,71,68,0.56)] px-5 py-4">
                <h3 className="text-[1rem] font-semibold leading-[1.45] text-[var(--consultry-text-primary)]">
                  {row.feature}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4">
                <MobileCellValue featured label={content.columnHeaders[1]} value={row.consultry} />
                <MobileCellValue label={content.columnHeaders[2]} value={row.competitor} />
              </div>
            </article>
          ))}
        </MotionReveal>

        <MotionReveal className="mx-auto hidden max-w-3xl overflow-x-auto md:block" delay={0.08}>
          <table
            className="w-full border-collapse overflow-hidden rounded-[var(--consultry-radius-md)] transition-transform duration-500 hover:-translate-y-1"
            style={{
              background: "var(--consultry-surface-card)",
              boxShadow: "var(--consultry-shadow-lg)",
              border: "1px solid var(--consultry-border-soft)",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "var(--consultry-surface-dark)",
                  borderBottom: "2px solid var(--consultry-brand-primary)",
                }}
              >
                <th
                  className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--consultry-text-faint)" }}
                >
                  {content.columnHeaders[0]}
                </th>
                <th
                  className="w-[180px] px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--consultry-brand-primary) 0%, #e8913a 100%)",
                    borderRadius: "var(--consultry-radius-sm)",
                  }}
                >
                  {content.columnHeaders[1]}
                </th>
                <th
                  className="w-[180px] px-5 py-4 text-center text-sm font-medium uppercase tracking-wider"
                  style={{ color: "var(--consultry-text-faint)" }}
                >
                  {content.columnHeaders[2]}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(52, 48, 44, 0.3)"
                        : "transparent",
                    borderBottom: "1px solid rgba(74, 71, 68, 0.6)",
                  }}
                >
                  <td
                    className="px-5 py-4 text-base"
                    style={{ color: "var(--consultry-text-primary)" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="w-[180px] px-5 py-4 text-center"
                    style={{ background: "rgba(51, 46, 43, 0.6)" }}
                  >
                    <CellValue value={row.consultry} />
                  </td>
                  <td className="w-[180px] px-5 py-4 text-center">
                    <CellValue value={row.competitor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MotionReveal>
      </div>
    </section>
  );
}

function getCellMeta(value: "yes" | "no" | "partial") {
  if (value === "yes") {
    return {
      label: "Ja",
      dotClass: "bg-[#22c55e]",
      textClass: "text-[#22c55e]",
    } as const;
  }
  if (value === "no") {
    return {
      label: "Nein",
      dotClass: "bg-[#dc2626]",
      textClass: "text-[#dc2626]",
    } as const;
  }
  return {
    label: "Teilweise",
    dotClass: "bg-[var(--consultry-brand-warm)]",
    textClass: "text-[var(--consultry-brand-warm)]",
  } as const;
}

function CellValue({ value }: { value: "yes" | "no" | "partial" }) {
  const meta = getCellMeta(value);

  if (value === "yes") {
    return (
      <span className="text-xl font-bold" style={{ color: "#22c55e" }}>
        &#x2713;
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="text-lg font-bold" style={{ color: "#dc2626" }}>
        &#x2715;
      </span>
    );
  }

  return (
    <span className="text-[13px] font-medium" style={{ color: "var(--consultry-brand-warm)" }}>
      {meta.label}
    </span>
  );
}

function MobileCellValue({
  value,
  label,
  featured = false,
}: {
  value: "yes" | "no" | "partial";
  label: string;
  featured?: boolean;
}) {
  const meta = getCellMeta(value);

  return (
    <div
      className={cn(
        "rounded-[18px] border px-4 py-3",
        featured
          ? "border-[rgba(232,145,59,0.28)] bg-[linear-gradient(180deg,rgba(232,145,59,0.14)_0%,rgba(191,84,71,0.08)_100%)]"
          : "border-[rgba(74,71,68,0.6)] bg-[rgba(255,255,255,0.02)]",
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--consultry-text-faint)]">
        {label}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <span className={cn("h-2.5 w-2.5 rounded-full", meta.dotClass)} />
        <span className={cn("text-[14px] font-semibold", meta.textClass)}>{meta.label}</span>
      </div>
    </div>
  );
}
