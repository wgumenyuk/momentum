import { User } from "$internal/api";

const DeleteAccountButton = () => {
  return (
    <button
      onClick={async () => await User.deleteAccount()}
      className="bg-red-500 text-white py-2 px-4 rounded"
    >
      Delete Account
    </button>
  );
};

export default DeleteAccountButton;
