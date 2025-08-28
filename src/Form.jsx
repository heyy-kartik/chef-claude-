import React, { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import Ingredients from "./Ingredients";

const Form = () => {
  const [ingredient, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function getRecipe() {
    setRecipeShown(true);
  }

  function handleClick(event) {
    event.preventDefault(); // Prevent form submission
    const input = event.target.form.querySelector('input[name="ingredient"]');
    const newIngredient = input.value.trim();
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      input.value = ""; // Clear the input field
    }
    console.log("Button clicked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    event.target.reset(); // Clear the input field after submission
  }

  return (
    <div className="bg-[#fffcf2] p-4 shadow-md h-[420px]">
      <form
        className="flex flex-row items-center gap-5 p-5"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 h-8 w-[200px] text-sm border border-gray-600 rounded-md"
          type="text"
          placeholder="e.g., Chilly"
          name="ingredient"
        />
        <button
          type="button"
          onClick={handleClick}
          className="p-2 gap-5 h-8 align-middle justify-center items-center flex w-[150px] bg-black text-sm text-white rounded-md hover:bg-gray-800"
        >
          + Add Ingredient
        </button>
      </form>
      {ingredient.length > 0 && <Ingredients />}
      {recipeShown && <ClaudeRecipe />}
    </div>
  );
};

export default Form;
