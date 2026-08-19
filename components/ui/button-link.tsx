import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "light" | "ghost";
};

const variantClasses = {
  primary:
    "bg-crowd-brown text-crowd-cream shadow-crowd hover:bg-crowd-earth focus-visible:bg-crowd-earth",
  secondary:
    "border border-crowd-brown/25 bg-crowd-cream text-crowd-brown hover:border-crowd-brown hover:bg-crowd-sand focus-visible:bg-crowd-sand",
  light:
    "bg-crowd-sand text-crowd-brown shadow-crowd hover:bg-crowd-cream focus-visible:bg-crowd-cream",
  ghost:
    "border border-crowd-cream/45 bg-transparent text-crowd-cream hover:bg-crowd-cream hover:text-crowd-brown focus-visible:bg-crowd-cream focus-visible:text-crowd-brown",
} as const;

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={[
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition duration-crowd ease-crowd focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-crowd-focus",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
