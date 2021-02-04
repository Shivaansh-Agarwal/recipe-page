import React from "react";
import imgBlog from "./images/photo1.png";
import imgSixDots from "./images/6dots.svg";

const BlogHead = () => {
  return (
    <header>
      <div className="blog-title">Classic Cheesecake Recipe</div>
      <div className="blog-description">
        <div>
          <img src={imgSixDots} alt="" />
        </div>
        <p>
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>
      <div className="blog-image">
        <img src={imgBlog} alt="" />
      </div>
    </header>
  );
};

export default BlogHead;
