import React, { ReactNode } from "react";

interface BackgroundLayoutProps {
  children: ReactNode;
}

export const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="
      flex
      justify-center
      items-center
      min-h-screen
      max-w-screen-md
      mx-auto
      p-4
      lg:p-0
      mb-20
    ">
      {children}
    </div>
  );
};
