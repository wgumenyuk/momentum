import { ArrowLeftIcon, CheckIcon  } from "lucide-react";

// Types
import type { FC } from "react";

export type StackTopProps = {
  onCancel: () => void;
  onAccept: () => void;
};

export const StackTop: FC<StackTopProps> = ({ onCancel, onAccept }) => {
  return (
    <div className="flex justify-between items-align w-full">
      <button onClick={onCancel}>
        <ArrowLeftIcon
          size="40px"
          className="text-white focus:outline-none"
        />
      </button>
      <button onClick={onAccept}>
        <CheckIcon
          size="40px"
          className="text-green-500 focus:outline-none"
        />
      </button>
    </div>
  ); 
};
