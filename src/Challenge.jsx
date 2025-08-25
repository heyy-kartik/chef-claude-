import React from "react";
import { useState } from "react";
const Challenge = () => {
  const handleclick = () => {
    console.log("Button clicked");
    setButtonText("Definitely");
  };
  const [buttonText, setButtonText] = useState("Click Me");
  return (
    <div>
      <h3 className="text-2xl"> Is State Imp to Know ? </h3>
      <button
        onClick={handleclick}
        className="border cursor-pointer border-b-blue-300 rounded-2xl bg-gray-800 text-white hover:bg-gray-600 p-2 m-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Challenge;
