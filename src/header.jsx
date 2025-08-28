import React from "react";

const header = () => {
  return (
    <div className=" text-center  font-mono pb-8 ">
      <nav className=" top-0 left-0 z-50 flex justify-between  ">
        <ul className=" flex justify-center text-lg text-amber-200  ml-[400px] mt-[40px] border border-emerald-400 h-10 rounded-xl w-2xl  items-center backdrop-blur-md  shadow-lg shadow-indigo-500/50  md:gap-12 ">
          <li className="text-gray-800 font-bold text-[23px]">
            Chef Claude:
            <span className="text-emerald-400 font-unbound "> the AI Chef</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
