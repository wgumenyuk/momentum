import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  DumbbellIcon,
  UsersIcon,
  UserIcon
} from "lucide-react";

// Types
import type { FC, ReactElement, ReactNode } from "react";

type LocationProps = {
  to: string;
  icon: ReactElement;
  children: ReactNode;
};

const Location: FC<LocationProps> = ({ to, icon, children }) => {
  const linkClassName = clsx(
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-2",
    "text-gray",
    "w-16",
    "h-16",
    "rounded-xl",
    {
      "bg-blue-800": (location.pathname === to)
    }
  );

  return (
    <Link to={to} className={linkClassName}>
      {icon}
      <span className="text-xs">
        {children}
      </span>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className="
      fixed
      bottom-0
      left-1/2
      right-0
      -translate-x-1/2
      bg-blue-900
      p-4
      flex
      justify-around
      max-w-screen-md
      w-full
    ">
      <Location to="/home" icon={<HomeIcon/>}>
        Home
      </Location>
      <Location to="/workouts" icon={<DumbbellIcon/>}>
        Workouts
      </Location>
      <Location to="/social" icon={<UsersIcon/>}>
        Social
      </Location>
      <Location to="/profile" icon={<UserIcon/>}>
        Profile
      </Location>
    </nav>
  );
};
