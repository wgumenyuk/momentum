import React, { useState } from "react";
import { Input } from "$components/Input";

export const BlueprintForm: React.FC = () => {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Blueprint Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit" className="p-2 bg-blue-500 rounded-lg text-white">
        Save
      </button>
    </form>
  );
};
