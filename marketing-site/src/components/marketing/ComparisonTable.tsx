import type { ComparisonTableContent } from "@/lib/content/de/product";
import { MotionReveal } from "@/components/marketing/MotionReveal";

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

        <MotionReveal className="mx-auto max-w-3xl overflow-x-auto" delay={0.08}>
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

function CellValue({ value }: { value: "yes" | "no" | "partial" }) {
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
    <span
      className="text-[13px] font-medium"
      style={{ color: "var(--consultry-brand-warm)" }}
    >
      Teilweise
    </span>
  );
}
