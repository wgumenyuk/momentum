// NavigationBar.tsx
import React from "react";
import { Home, Dumbbell, History, User } from "lucide-react";

const NavigationBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-dark-gray p-4 flex justify-around">
            <button className="text-white flex flex-col items-center">
                <Home className="w-6 h-6" />
                <span className="text-xs mt-1">Home</span>
            </button>
            <button className="text-white flex flex-col items-center">
                <Dumbbell className="w-6 h-6" />
                <span className="text-xs mt-1">Workouts</span>
            </button>
            <button className="text-white flex flex-col items-center">
                <History className="w-6 h-6" />
                <span className="text-xs mt-1">History</span>
            </button>
            <button className="text-white flex flex-col items-center">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">Profile</span>
            </button>
        </nav>
    );
};

export default NavigationBar;
