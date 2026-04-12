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
    "border-transparent bg-[var(--consultry-brand-primary)] text-white shadow-[0_2px_12px_rgba(191,83,71,0.25)] hover:bg-[var(--consultry-brand-primary-hover)]",
  secondary:
    "border-[var(--consultry-border-strong)] bg-[rgba(255,255,255,0.08)] text-[var(--consultry-text-primary)] shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-[rgba(255,255,255,0.12)]",
  ghost:
    "border-transparent bg-transparent text-[var(--consultry-text-secondary)] hover:text-[var(--consultry-text-primary)]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--consultry-brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--consultry-surface-dark)]";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = cn(baseClasses, sizeClasses[size], variantClasses[variant], props.className);

  if ("href" in props) {
    const { href, children } = props as LinkButtonProps;

    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  const { children, className: _className, size: _size, type = "button", variant: _variant, ...rest } = props;
  void _className;
  void _size;
  void _variant;

  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
}
