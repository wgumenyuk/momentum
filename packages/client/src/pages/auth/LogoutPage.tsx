import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Intern
import { BackgroundLayout } from "$components/Background";

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleCancel = () => {
    const returnTo = searchParams.get("return_to") || "/profile";
    navigate(returnTo);
  };

  return (
    <BackgroundLayout>
      <div className="flex justify-center items-center h-full w-full">
        <div className="w-90 h-40 bg-[#D4D9E3] rounded-lg flex flex-col items-center justify-between p-5 box-border">
          <div className="text-[#011518] text-lg text-center mt-2.5">Are you sure you want to log out?</div>
          <div className="flex justify-between w-full mt-4">
            <div
              className="w-32 h-12 bg-gradient-to-r from-[#40A3BC] to-[#245A68] rounded-lg flex justify-center items-center text-white text-lg cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-[#245A68] hover:to-[#40A3BC] mx-2"
              onClick={handleLogout}
            >
              Yes
            </div>
            <div
              className="w-32 h-12 bg-gradient-to-r from-[#40A3BC] to-[#245A68] rounded-lg flex justify-center items-center text-white text-lg cursor-pointer transition duration-300 hover:bg-gradient-to-r hover:from-[#245A68] hover:to-[#40A3BC] mx-2"
              onClick={handleCancel}
            >
              No
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};
