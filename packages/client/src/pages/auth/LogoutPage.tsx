import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

// Intern
import { useJwt } from "$components/JwtContext";
import { BackgroundLayout } from "$components/Background";
import { Card } from "$components/Card";
import { Button } from "$components/Button";

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();

  const { setToken } = useJwt()!;

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <BackgroundLayout>
      <Card className="flex flex-col items-center gap-8 p-8">
        <span className="text-xl">You're about to log out</span>
        <div className="flex items-center gap-8">
          <Button
            variant="blue"
            onClick={handleLogout}
          >
            Log out
          </Button>
          <Link
            to={searchParams.get("return_to") || "/profile"}
            className="text-red-400 text-xl"
          >
            Cancel
          </Link>
        </div>
      </Card>
    </BackgroundLayout>
  );
};
