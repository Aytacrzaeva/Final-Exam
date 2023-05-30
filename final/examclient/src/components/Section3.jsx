import React from "react";
import "./Section3.scss";
import { FaQuoteLeft } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="section3__top">
        <span>TESTIMONIAL</span>
        <h2>Happy Customers</h2>
      </div>
      <div className="section3__bottom">
        <div className="section3__bottom__cards">
          <div className="section3__bottom__cards__card">
            <div className="quote">
              <FaQuoteLeft className="quotes" />
            </div>
            <div className="section3__bottom__cards__card__top">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="section3__bottom__cards__card__bottom">
              <div className="section3__bottom__cards__card__bottom__img">
                <img
                  src="https://preview.colorlib.com/theme/furnish/images/person_3.jpg.webp"
                  alt=""
                />
              </div>
              <div className="section3__bottom__cards__card__bottom__text">
                <h3>Roger Scott</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
          <div className="section3__bottom__cards__card orange">
            <div className="quote">
              <FaQuoteLeft className="quotes" />
            </div>
            <div className="section3__bottom__cards__card__top">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="section3__bottom__cards__card__bottom">
              <div className="section3__bottom__cards__card__bottom__img">
                <img
                  src="https://preview.colorlib.com/theme/furnish/images/person_3.jpg.webp"
                  alt=""
                />
              </div>
              <div className="section3__bottom__cards__card__bottom__text">
                <h3>Roger Scott</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
          <div className="section3__bottom__cards__card">
            <div className="quote">
              <FaQuoteLeft className="quotes" />
            </div>
            <div className="section3__bottom__cards__card__top">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="section3__bottom__cards__card__bottom">
              <div className="section3__bottom__cards__card__bottom__img">
                <img
                  src="https://preview.colorlib.com/theme/furnish/images/person_3.jpg.webp"
                  alt=""
                />
              </div>
              <div className="section3__bottom__cards__card__bottom__text">
                <h3>Roger Scott</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
