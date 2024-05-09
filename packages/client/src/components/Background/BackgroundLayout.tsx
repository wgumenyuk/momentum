import React, { ReactNode } from "react";

interface BackgroundLayoutProps {
    children: ReactNode;  // Define the type for 'children'
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-cool-gray rounded-2xl shadow-xl p-4 md:p-10 w-full max-w-md">
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;
