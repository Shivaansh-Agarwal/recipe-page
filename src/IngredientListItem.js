import React from "react";

const IngredientListItem = (props) => {
  return (
    <div className="ingredientListItem">
      <div className="bullet-square"></div>
      <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
    </div>
  );
};

export default IngredientListItem;
