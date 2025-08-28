import React from "react";

const Ingredients = (props) => {
  const ingredientsListItems = props.ingredient.map((item) => {
    return (
      <li key={item} className="text-lg font-mono ml-4 pt-2 text-gray-600">
        • {item}
      </li>
    );
  });
  return (
    <div>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {ingredientsListItems.length > 3 && (
          <div className="recipe-section flex gap-3 p-5 border border-gray-300 rounded-md mt-5 bg-orange-50">
            <div className="text-lg font-dm-sans">
              <h3>Ready for a recipe?</h3>
              <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
                <p className="text-[17px] text-gray-800">
                  Generate a recipe from your list of ingredients
                </p>
                <button
                  onClick={props.getRecipe}
                  className="p-3 bg-orange-300 border border-gray-300 rounded-lg text-sm text-black hover:bg-orange-100 cursor-pointer"
                >
                  Get a recipe
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Ingredients;
