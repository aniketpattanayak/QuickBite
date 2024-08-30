import React from "react";
import HeroSec from "./HeroSec";
import Recipe from "./Recipe";
import Hotels from "./Hotels";

function Body() {
  return (
      <>
      <div className="main-content">
        <HeroSec />
        <Recipe />
        <Hotels />
        </div>
      </>
  );
}

export default Body;
