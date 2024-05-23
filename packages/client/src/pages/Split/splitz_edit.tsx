import React, { useState } from "react";
import "./index.css";

function Pages() {
  const [ components, setComponents ] = useState([]);
  

  const deleteComponent = () => {
    setComponents((prevComponents) => prevComponents.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-black">
      <div className="flex justify-end p-4">
        <button
          className="bg-gray-700 text-white px-4 py-2 m-2 rounded hover:bg-gray-600"
          
        >
          Add
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 m-2 rounded hover:bg-gray-600"
          onClick={deleteComponent}
        >
          Delete
        </button>
      </div>
      <div className="mt-4">
        {components.map((component) => (
          <div key={component} className="bg-gray-800 text-white p-4 m-2 rounded">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
