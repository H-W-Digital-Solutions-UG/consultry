import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-sm sm:text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--consultry-cta-border)] text-[var(--consultry-cta-text)] shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:[background:var(--consultry-cta-surface)] before:content-[''] after:absolute after:inset-0 after:-z-10 after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 after:[background:var(--consultry-cta-surface-hover)] after:content-[''] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(244,183,109,0.08)] hover:after:opacity-100 active:translate-y-px active:shadow-[0_5px_12px_rgba(0,0,0,0.16)] active:after:opacity-[0.92]",
  secondary:
    "border-[var(--consultry-border-strong)] bg-[rgba(255,255,255,0.05)] text-[var(--consultry-text-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-[rgba(244,183,109,0.22)] hover:bg-[rgba(255,255,255,0.09)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.16)] active:translate-y-px active:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
  ghost:
    "border-transparent bg-transparent text-[var(--consultry-text-secondary)] hover:text-[var(--consultry-text-primary)]",
};

const baseClasses =
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--consultry-brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--consultry-surface-dark)]";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = cn(baseClasses, sizeClasses[size], variantClasses[variant], props.className);
  const style = undefined;

  if ("href" in props) {
    const { href, children } = props as LinkButtonProps;

    return (
      <Link className={className} href={href} style={style}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  const {
    children,
    className: _className,
    size: _size,
    type = "button",
    variant: _variant,
    ...rest
  } = props;
  void _className;
  void _size;
  void _variant;

  return (
    <button className={className} style={style} type={type} {...rest}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
