import React, { useState } from "react";

const Form = () => {
  const [ingredient, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientsListItems = ingredient.map((item, index) => (
    <li key={index} className="text-lg font-mono ml-4 pt-2 text-gray-600">
      • {item}
    </li>
  ));

  function handleRecipe() {
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
    <div className="bg-[#fffcf2] p-4 shadow-md h-[500px]">
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
      {ingredient.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredient.length > 3 && (
            <div className="recipe-section flex gap-3 p-5 border border-gray-300 rounded-md mt-5 bg-orange-50">
              <div className="text-lg font-dm-sans">
                <h3>Ready for a recipe?</h3>
                <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
                  <p className="text-[17px] text-gray-800">
                    Generate a recipe from your list of ingredients
                  </p>
                  <button
                    onClick={handleRecipe}
                    className="p-3 bg-orange-300 border border-gray-300 rounded-lg text-sm text-black hover:bg-orange-100 cursor-pointer"
                  >
                    Get a recipe
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <section className="ml-5 pt-30 ">
          <h2 className="text-2xl font-serif">Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p className="text-lg font-poppins p-2">
              Based on the ingredients you have available, I would recommend
              making a simple and delicious{" "}
              <strong>Beef Bolognese Pasta </strong>. Here is the recipe:
            </p>
            <h3 className="text-xl font-semibold m-2">
              {" "}
              Beef Bolognese Pasta ✨
            </h3>
            <strong className="text-gray-700">Ingredients:</strong>
            <ul className="m-4 mb-4 list-disc list-inside">
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol className="space-y-2">
              <li className="mb-2">
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </div>
  );
};

export default Form;
