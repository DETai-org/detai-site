import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps & ComponentPropsWithoutRef<"button"> & {
  as?: "button";
};

type ButtonAsLink = ButtonBaseProps & ComponentPropsWithoutRef<"a"> & {
  as: "a";
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-basic-gold-primary text-basic-dark hover:bg-basic-gold-dark focus-visible:outline-basic-gold-primary",
  secondary:
    "border border-basic-gold-primary text-basic-gold-primary hover:bg-basic-gold-soft focus-visible:outline-basic-gold-primary",
};

export default function Button(props: ButtonProps) {
  if (props.as === "a") {
    const { variant = "primary", className, children, ...anchorProps } = props;

    return (
      <a
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-sans font-medium leading-tight rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          variantClasses[variant],
          className,
        )}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { variant = "primary", className, children, ...buttonProps } = props;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-sans font-medium leading-tight rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
