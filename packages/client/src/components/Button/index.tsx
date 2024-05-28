import React from "react";
import clsx from "clsx";

// Types
import type { FC, ReactNode, MouseEventHandler } from "react";

export type ButtonVariant = "blue" | "red";

export type ButtonProps = {
  variant: ButtonVariant;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => {
  const variants: Record<ButtonVariant, string> = {
    blue: "bg-gradient-btn hover:bg-gradient-btn focus:ring-blue-200",
    red: "bg-red-400 hover:bg-red-300 focus:ring-red-300"
  };

  const className = clsx(
    "text-white",
    "py-2",
    "px-4",
    "sm:px-6",
    "md:px-10",
    "lg:px-20",
    "rounded-lg",
    "shadow-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-opacity-50",
    "transition",
    "duration-150",
    "ease-in-out",
    "text-lg",
    variants[variant] 
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
