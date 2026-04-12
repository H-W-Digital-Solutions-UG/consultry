import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  overline?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  overline,
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const label = overline ?? eyebrow;

  return (
    <div className={cn("max-w-3xl", isCentered && "mx-auto text-center", className)}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 className="display-section text-balance mt-4 text-[var(--consultry-text-primary)]">
        {title}
      </h2>
      {body ? <p className="body-lg mt-5 text-balance">{body}</p> : null}
    </div>
  );
}
