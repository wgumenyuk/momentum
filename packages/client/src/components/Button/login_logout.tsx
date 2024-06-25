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

// Button component
export const Button: FC<ButtonProps> = ({ variant, onClick, children }) => {
  const variants: Record<ButtonVariant, string> = {
    blue: "bg-blue-500 hover:bg-blue-400 focus:ring-blue-200",
    red: "bg-red-500 hover:bg-red-400 focus:ring-red-300"
  };

  const className = clsx(
    "text-white",
    "py-2",
    "px-4",
    "sm:px-6",
    "md:px-8",
    "lg:px-10",
    "rounded-lg",
    "shadow-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-opacity-50",
    "transition",
    "duration-150",
    "ease-in-out",
    variants[variant]
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

// Component to select between Login and Register
export const AuthOptions: FC<{ onLogin: MouseEventHandler<HTMLButtonElement>, onRegister: MouseEventHandler<HTMLButtonElement> }> = ({ onLogin, onRegister }) => {
  return (
    <div className="flex flex-col space-y-4">
      <Button variant="blue" onClick={onLogin}>Login</Button>
      <Button variant="red" onClick={onRegister}>Register</Button>
    </div>
  );
};
