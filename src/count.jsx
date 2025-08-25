import React, { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);

  const add = () => {
    setcount(count + 1);
    console.log("Button clicked");
  };
  const Subtract = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <h2 className="text-2xl p-4 m-3 align-middle items-center font-serif font-bold">
        How many times i have Clicked ?
      </h2>

      <div className="flex flex-row gap-5 justify-center items-center">
        <button
          className=" border border-green-200 rounded-lg p-3 m-3 hover:bg-gray-700 cursor-pointer bg-gray-950 text-white"
          onClick={add}
        >
          {" "}
          +{" "}
        </button>

        <button className="border border-green-200 rounded-lg p-3 m-3 ">
          {count}
        </button>

        <button
          className="bg-gray-950 text-white border border-green-200 rounded-lg p-3 m-3 hover:bg-gray-700 cursor-pointer"
          onClick={Subtract}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Count;
