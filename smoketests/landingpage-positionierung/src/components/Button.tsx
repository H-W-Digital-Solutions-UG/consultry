import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors duration-(--duration-fast) disabled:opacity-60 disabled:cursor-not-allowed";
const sizes: Record<Size, string> = { sm: "h-9 px-4 text-sm", md: "h-11 px-6 text-base", lg: "h-13 px-7 text-base" };
const variants: Record<Variant, string> = {
  primary: "bg-brand-dark text-white hover:bg-brand active:bg-brand-dark",
  secondary: "border border-ink/20 text-ink hover:border-ink/40 bg-transparent",
  "ghost-dark": "text-on-dark border border-hair-dark hover:bg-white/5",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Marketing button: always a pill, never a gradient, never a shadow. One solid accent per viewport. */
export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
