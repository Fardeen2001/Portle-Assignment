import React from "react";
import SaveButton from "./SaveButton";

const Header = () => {
  return (
    <div className="flex justify-around my-5">
      <h1 className="font-bold text-3xl">Demo Editor By Fardeen Ahamed</h1>
      <SaveButton />
    </div>
  );
};

export default Header;
