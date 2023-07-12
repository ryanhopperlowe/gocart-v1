"use client";

import { ComponentProps, useMemo } from "react";
import { Button as TwButton } from "@/external";

type ButtonProps = ComponentProps<typeof TwButton>;

export function Button({
  className,
  variant,
  children,
  ...props
}: ButtonProps) {
  const color = useMemo(() => {
    if (variant === "filled") return "bg-primary-600 hover:bg-primary-800";
    if (variant === "outlined")
      return "border-primary-600 hover:border-primary-800";
    return "text-priary-600";
  }, []);

  return (
    <TwButton
      className={`${color} ${className}`}
      variant={variant || "text"}
      {...props}
    >
      {children}
    </TwButton>
  );
}
