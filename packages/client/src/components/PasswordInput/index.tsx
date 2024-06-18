import { useState } from "react";
import clsx from "clsx";
import { LockIcon, EyeIcon, EyeOffIcon } from "lucide-react";

// Intern
import { Input } from "$components/Input";

// Types
import type { FC } from "react";
import type { InputProps } from "$components/Input";

type PasswordInputProps = Pick<InputProps, "className" | "onChange" | "value">;

/**
  `PasswordInput`-Komponente.
*/
export const PasswordInput: FC<PasswordInputProps> = ({
  className,
  value,
  onChange
}) => {
  const [ isClear, setIsClear ] = useState(false);

  const toggleIsClear = () => {
    setIsClear(!isClear);
  };

  return (
    <Input
      type={isClear ? "text" : "password"}
      icon={LockIcon}
      onChange={onChange}
      value={value}
      placeholder="••••••••"
      className={clsx("relative", className)}
    >
      <button
        onClick={toggleIsClear}
        className="absolute right-2.5"
      >
        {isClear ? <EyeIcon/> : <EyeOffIcon/>}
      </button>
    </Input>
  );
};
