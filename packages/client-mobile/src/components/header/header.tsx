import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Momentum</h1>
        </div>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Workouts
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Plans
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Progress
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
