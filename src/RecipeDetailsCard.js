import React from "react";

const RecipeDetailsCard = () => {
  const cardDetails = [
    {
      materialIcon: "local_dining",
      name: "Yields",
      desc: "12 servings",
    },
    {
      materialIcon: "schedule",
      name: "Prep TIme",
      desc: "45 minutes",
    },
    {
      materialIcon: "schedule",
      name: "Cook Time ",
      desc: "1 hour",
    },
    {
      materialIcon: "schedule",
      name: "Total Time",
      desc: "7,75 hours",
    },
  ];

  return (
    <div className="recipeDetailsCard">
      {cardDetails.map((item, index) => (
        <div className="cardItem" key={index} data-index={index}>
          <div className="cardLeft">
            <span className="material-icons">{item.materialIcon}</span>
          </div>
          <div className="cardRight">
            <p className="cardItemName">{item.name}</p>
            <p className="cardItemDesc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeDetailsCard;
