import React from "react";
import ReactMarkdown from "react-markdown";
// import { useState , useEffect } from 'react'
const ClaudeRecipe = (props) => {
  return (
    <>
      <div className="space-x-1.5 text-gray-800">
        <h2 className="text-2xl font-medium mb-2 font-serif ">
          Chef Claude Recommends :{" "}
        </h2>
        <div className="space-x-1.5 text-gray-800 border-spacing-1.5 space-y-2 bg-[#fffcf2] p-4 rounded-md ">
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ClaudeRecipe;
