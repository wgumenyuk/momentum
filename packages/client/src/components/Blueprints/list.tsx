import React from "react";
import { BlueprintItem } from "./item";

export interface BlueprintListProps {
  blueprints: Array<{ id: string; name: string; description: string }>;
}

export const BlueprintList: React.FC<BlueprintListProps> = ({ blueprints }) => {
  return (
    <div className="space-y-4">
      {blueprints.map((blueprint) => (
        <BlueprintItem key={blueprint.id} name={blueprint.name} description={blueprint.description}/>
      ))}
    </div>
  );
};
