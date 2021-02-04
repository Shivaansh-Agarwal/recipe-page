import React from "react";
import BlogHead from "./BlogHead";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import RecipeDetailsCard from "./RecipeDetailsCard";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <BlogHead />
      <main>
        <div className="main-ingredients-card">
          <Ingredients />
          <RecipeDetailsCard />
        </div>
        <div className="main-instructions">
          <Instructions />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
