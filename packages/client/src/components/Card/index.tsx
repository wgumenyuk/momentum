import type { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

/**
  `Card`-Komponente.
*/
export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-blue-800 p-4 rounded-xl">
      {children}
    </div>
  );
};
