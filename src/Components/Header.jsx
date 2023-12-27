import React from "react";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";

const Header = ({ submitHandler, resetHandler }) => {
  return (
    <div className="flex justify-around my-5">
      <h1 className="font-bold text-3xl">Demo Editor By Fardeen Ahamed</h1>
      <div className="controlsButtons flex  gap-3">
        <SaveButton onSave={submitHandler} />
        <ResetButton onReset={resetHandler} />
      </div>
    </div>
  );
};

export default Header;
