import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  as?: "button" | "a";
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

export default function Button({
  as = "button",
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = as;

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-basic-gold-primary text-basic-dark hover:bg-basic-gold-dark focus-visible:outline-basic-gold-primary",
    secondary:
      "border border-basic-gold-primary text-basic-gold-primary hover:bg-basic-gold-soft focus-visible:outline-basic-gold-primary",
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-sans font-medium leading-tight rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
