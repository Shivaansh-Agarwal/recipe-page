import React from "react";
import IngredientListItem from "./IngredientListItem";

const Ingredients = () => {
  let dishes = [
    {
      dishName: "Graham Cracker Crust",
      ingredients: [
        "1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)",
        "5 Tablespoons (70g) <strong>unsalted butter</strong>, melted",
        "1/4 cup (50g) <strong>granulated sugar</strong>",
      ],
    },
    {
      dishName: "Cheesecake",
      ingredients: [
        "four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room temperature",
        "1 cup (200g) <strong>granulated sugar</strong>",
        "1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature",
        "1 teaspoon <strong>pure vanilla extract</strong>",
        "2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)",
        "3 large <strong>eggs</strong>, at room temperature",
        `topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, 
      red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes)`,
      ],
    },
  ];
  return (
    <div className="ingredients">
      <div className="subHeading">Ingredients</div>
      <div className="dishIngredients">
        {dishes.map((dish) => (
          <div className="dish" key={dish.dishName}>
            <div className="dishName">{dish.dishName}</div>
            {dish.ingredients.map((item, index) => (
              <IngredientListItem desc={item} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
