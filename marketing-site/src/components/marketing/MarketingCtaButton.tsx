import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/Button";

type ButtonLinkProps = Extract<ButtonProps, { href: string }>;
type CtaDestinationType = "internal_contact" | "internal_waitlist";

type MarketingCtaTracking = {
  ctaId: string;
  label: string;
  location: string;
  destinationType?: CtaDestinationType;
};

export type MarketingCtaButtonProps = ButtonLinkProps & {
  children: ReactNode;
  tracking?: MarketingCtaTracking;
};

function inferDestinationType(href: string): CtaDestinationType | undefined {
  if (href === "/warteliste") {
    return "internal_waitlist";
  }

  if (href === "/kontakt") {
    return "internal_contact";
  }

  return undefined;
}

export function MarketingCtaButton({
  children,
  href,
  tracking,
  ...props
}: MarketingCtaButtonProps) {
  const destinationType = tracking?.destinationType ?? inferDestinationType(href);
  const analyticsProps =
    tracking && destinationType
      ? {
          "data-analytics-cta-id": tracking.ctaId,
          "data-analytics-destination-path": href,
          "data-analytics-destination-type": destinationType,
          "data-analytics-event": "cta_click" as const,
          "data-analytics-label": tracking.label,
          "data-analytics-location": tracking.location,
        }
      : {};

  return (
    <Button href={href} {...analyticsProps} {...props}>
      {children}
    </Button>
  );
}
