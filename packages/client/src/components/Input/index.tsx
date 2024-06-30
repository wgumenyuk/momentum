import clsx from "clsx";

// Types
import type { ComponentType, ChangeEventHandler, ReactNode, FC } from "react";

export type InputProps = {
  type: "text" | "password";
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  icon?: ComponentType;
  children?: ReactNode;
};

/**
  `Input`-Komponente.
*/
export const Input: FC<InputProps> = ({
  type,
  onChange,
  value,
  placeholder,
  className,
  icon: Icon,
  children
}) => {
  const inputClassName = clsx(
    "flex",
    "justify-between",
    "items-center",
    "px-2.5",
    "rounded",
    className 
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={inputClassName}>
      {Icon && <Icon/>}
      <input
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        spellCheck={false}
        className="bg-transparent w-full h-full px-4 py-3.5 focus:outline-none"
      />
      {children}
    </div>
  );
};
