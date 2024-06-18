import clsx from "clsx";

// Types
import type { FC, ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

/**
  `Card`-Komponente.
*/
export const Card: FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx("bg-blue-800 p-4 rounded-xl", className)}>
      {children}
    </div>
  );
};
