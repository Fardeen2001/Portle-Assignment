import React from "react";

const SaveButton = ({ onSave }) => {
  return (
    <button
      type="button"
      className="bg-slate-500 rounded-xl text-white py-2 px-4 text-xl font-medium hover:bg-black shadow-xl"
      onClick={onSave}
    >
      Save
    </button>
  );
};

export default SaveButton;
