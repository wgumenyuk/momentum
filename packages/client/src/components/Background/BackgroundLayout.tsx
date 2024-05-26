import React, { ReactNode } from "react";

interface BackgroundLayoutProps {
  children: ReactNode;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="
      flex
      justify-center
      items-center
      min-h-screen
      max-w-screen-md
      mx-auto
      p-8
      lg:p-0
    ">
      {children}
    </div>
  );
};

export default BackgroundLayout;
