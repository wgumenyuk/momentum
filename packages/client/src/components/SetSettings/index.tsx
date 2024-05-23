import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";

// Types
import type { FC } from "react";

type SetSettingsProps = {
  id: number;
  reps?: number;
  weight?: number;
  onChange: (reps: number, weight: number) => void;
  onDelete: () => void;
};

export const SetSettings: FC<SetSettingsProps> = ({
  id,
  onChange,
  onDelete,
  reps: _reps = 0,
  weight: _weight = 0
}) => {
  const [ reps, setReps ] = useState(_reps);
  const [ weight, setWeight ] = useState(_weight);

  // Wir nutzen `onEffect()`, um die State an die Parent-Komponente zu übergeben. 
  useEffect(() => {
    onChange(reps, weight);
  }, [ reps, weight, onChange ]);

  return (
    <div className="flex justify-between items-center bg-blue-800 text-white p-4 rounded-xl">
      <span>
        Set {id}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          className="bg-blue-700 px-2.5 py-1.5 rounded-lg focus:outline-none"
          placeholder="0"
          value={reps}
          onChange={(e) => setReps(e.target.valueAsNumber)}
        />
        <span>&times;</span>
        <input
          type="number"
          min="1"
          className="bg-blue-700 px-2.5 py-1.5 rounded-lg focus:outline-none"
          placeholder="0"
          value={weight}
          onChange={(e) => setWeight(e.target.valueAsNumber)}
        />
        <span>kg</span>
        <button
          className="grid place-content-center bg-blue-700 w-6 h-6 rounded-lg focus:outline-none"
          onClick={onDelete}
        >
          <XIcon size="16px"/> 
        </button>
      </div>
    </div>
  );
};
