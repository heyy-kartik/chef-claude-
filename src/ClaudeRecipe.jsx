import React from "react";
import ReactMarkdown from "react-markdown";
// import { useState , useEffect } from 'react'
const ClaudeRecipe = (props) => {
  return (
    <>
      <div>
        <h2 className="text-lg font-bold mb-2 font-serif ">
          {" "}
          Chef Claude Recommends :{" "}
        </h2>
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </div>
    </>
  );
};

export default ClaudeRecipe;
