import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button
      type="button"
      className="bg-slate-500 rounded-xl text-white py-2 px-4 text-xl font-medium hover:bg-black shadow-xl"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;
