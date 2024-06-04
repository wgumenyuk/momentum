import { useMemo, useState } from "react";
import clsx from "clsx";

// Types
import type { FC, MouseEvent } from "react";

type SwitchProps = {
  onChange: (isActive: boolean) => void;
  isActive?: boolean; 
};

/**
  `Switch`-Komponente.
*/
export const Switch: FC<SwitchProps> = ({
  onChange,
  isActive: _isActive = false
}) => {
  const [ isActive, setIsActive ] = useState(_isActive);

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setIsActive(target.checked);
    onChange(isActive);
  };

  const labelClassName = useMemo(() => {
    return clsx(
      "relative",
      "block",
      "w-12",
      "h-6",
      "rounded-md",
      {
        "bg-gradient-btn": isActive,
        "bg-blue-900": !isActive
      }
    );
  }, [ isActive ]);

  const sliderClassName = useMemo(() => {
    return clsx(
      "absolute",
      "block",
      "bg-white",
      "w-6",
      "h-6",
      "rounded",
      "shadow-sm",
      "transition-transform",
      {
        "translate-x-full": isActive
      }
    );
  }, [ isActive ]);

  return (
    <label className={labelClassName}>
      <input
        type="checkbox"
        className="sr-only"
        onClick={handleClick}
      />
      <span className={sliderClassName}/>
    </label>  
  );
};
