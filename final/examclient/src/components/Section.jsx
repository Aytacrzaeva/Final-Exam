import React from "react";
import "./Section.scss";
const Section = () => {
  return (
    <div className="section1">
      <div className="section1__left">
        <div className="section1__left__items">
          <h1>
            Best Design of</h1>
            <span>Furniture Collections</span>
          
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button>DISCOVER</button>
        </div>
      </div>
      <div className="section1__right">
        <img
          src="https://preview.colorlib.com/theme/furnish/images/bg_2.jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section;
