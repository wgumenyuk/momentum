import type { FC } from "react";

/**
  `Loader`-Komponente.
*/
export const Loader: FC = () => {
  return (
    <span className="
      block
      bg-blue-800
      w-10
      h-10
      rounded-full
      animate-ping
    "/>
  );
};
