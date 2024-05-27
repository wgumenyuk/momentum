import React from "react";

const DeleteAccountButton = () => {
  const handleDelete = async () => {
    try {
      const response = await fetch("/api/delete_function", {
        method: "DELETE"
      });
      if(response.status === 200) {
        alert("Account deleted successfully");
      }
    } catch(error) {
      console.error("Error deleting account:", error);
      alert("There was an error deleting your account.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white py-2 px-4 rounded"
    >
      Delete Account
    </button>
  );
};

export default DeleteAccountButton;
