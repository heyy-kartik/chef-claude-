import React, { useState } from "react";

const Form = () => {
  const [ingredient, setingredietns] = useState([]);

  const ingreedientslistItems = ingredient.map((ingredient, index) => (
    <li key={index} className="text-lg  font-mono ml-4 pt-2 text-gray-600">
      • {ingredient}
    </li>
  ));

  function handleclick() {
    console.log("Button clicked");
  }
  function handleSumbit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newingredient = formData.get("ingredient");
    setingredietns((previngredients) => [...previngredients, newingredient]);
  }

  return (
    <div className="bg-[#fffcf2]  p-4 shadow-md h-[500px]">
      <form
        className="flex flex-row items-center  gap-5 p-5"
        onSubmit={handleSumbit}
      >
        <input
          className="p-2  h-8  w-[200px] text-sm border border-gray-600   rounded-md"
          type="text"
          placeholder="e.g. Chilly"
          name="ingredient"
        ></input>
        <button
          onClick={handleclick}
          className="p-2 gap-5 h-8 align-middle justify-center items-center flex w-[200px] bg-black text-sm text-white rounded-md hover:bg-gray-800"
        >
          + Add Ingredient
        </button>
      </form>
      <ul className="listitems ">
        <li className="text-2xl  font-bold ml-5 text-black font-dm-sans">
          Ingredients On Hand :
        </li>
        {ingreedientslistItems}
      </ul>
    </div>
  );
};

export default Form;
