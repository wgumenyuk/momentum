import React from "react";
import { Link } from "react-router-dom";

export const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Momentum!</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};
