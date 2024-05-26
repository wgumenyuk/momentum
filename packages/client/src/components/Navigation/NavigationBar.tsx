import React from "react";
import { Link } from "react-router-dom";
import { Home, Dumbbell, Users, User } from "lucide-react";

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-gray p-4 flex justify-around">
      <Link to="/" className="text-cool-gray flex flex-col items-center">
        <Home className="w-6 h-6"/>
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/workouts" className="text-cool-gray flex flex-col items-center">
        <Dumbbell className="w-6 h-6"/>
        <span className="text-xs mt-1">Workouts</span>
      </Link>
      <Link to="/social" className="text-cool-gray flex flex-col items-center">
        <Users className="w-6 h-6"/>
        <span className="text-xs mt-1">Social</span>
      </Link>
      <Link to="/profile" className="text-cool-gray flex flex-col items-center">
        <User className="w-6 h-6"/>
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  );
};

export default NavigationBar;
