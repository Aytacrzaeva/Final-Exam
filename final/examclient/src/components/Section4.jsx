import React from "react";
import "./Section4.scss";
import { MdPerson2 } from 'react-icons/md';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaComment } from 'react-icons/fa';

const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4__top">
        <span>OUR BLOG</span>
        <h2>Recent From Blog</h2>
      </div>
      <div className="section4__bottom">
        
        <div className="section4__bottom__card">
          <div className="section4__bottom__card__left">
            <img
              src="https://preview.colorlib.com/theme/furnish/images/image_1.jpg.webp"
              alt=""
            />
          </div>
          <div className="section4__bottom__card__right">
            <div className="section4__bottom__card__right__1">
              <span>
                <MdPerson2 className="icon" />
                ADMIN
              </span>
              <span>
                <IoCalendarOutline className="icon" />
                JAN. 27, 2021
              </span>
              <span>
                <FaComment className="icon"/>3
              </span>
            </div>
            <div className="section4__bottom__card__right__2">
              <p>COMMENTS</p>
            </div>
            <div className="section4__bottom__card__right__3">
              <h3>Shop the Look Cottage Country Living Room</h3>
            </div>
            <div className="section4__bottom__card__right__4">
              <p>A small river named Duden flows by their place.</p>
            </div>
          </div>
        </div>
        <div className="section4__bottom__card">
        <div className="section4__bottom__card__left">
            <img
              src="https://preview.colorlib.com/theme/furnish/images/image_2.jpg.webp"
              alt=""
            />
          </div>
          <div className="section4__bottom__card__right">
            <div className="section4__bottom__card__right__1">
              <span>
                <MdPerson2 className="icon" />
                ADMIN
              </span>
              <span>
                <IoCalendarOutline className="icon" />
                JAN. 27, 2021
              </span>
              <span>
                <FaComment className="icon"/>3
              </span>
            </div>
            <div className="section4__bottom__card__right__2">
              <p>COMMENTS</p>
            </div>
            <div className="section4__bottom__card__right__3">
              <h3>Shop the Look Cottage Country Living Room</h3>
            </div>
            <div className="section4__bottom__card__right__4">
              <p>A small river named Duden flows by their place.</p>
            </div>
          </div>
         
        </div>
        <div className="section4__bottom__card">
          <div className="section4__bottom__card__right">
            <div className="section4__bottom__card__right__1">
              <span>
                <MdPerson2 className="icon" />
                ADMIN
              </span>
              <span>
                <IoCalendarOutline className="icon" />
                JAN. 27, 2021
              </span>
              <span>
                <FaComment className="icon"/>3
              </span>
            </div>
            <div className="section4__bottom__card__right__2">
              <p>COMMENTS</p>
            </div>
            <div className="section4__bottom__card__right__3">
              <h3>Shop the Look Cottage Country Living Room</h3>
            </div>
            <div className="section4__bottom__card__right__4">
              <p>A small river named Duden flows by their place.</p>
            </div>
          </div>
          <div className="section4__bottom__card__left">
            <img
              src="https://preview.colorlib.com/theme/furnish/images/image_3.jpg.webp"
              alt=""
            />
          </div>
        </div>
        <div className="section4__bottom__card">
          <div className="section4__bottom__card__right">
            <div className="section4__bottom__card__right__1">
              <span>
                <MdPerson2 className="icon" />
                ADMIN
              </span>
              <span>
                <IoCalendarOutline className="icon" />
                JAN. 27, 2021
              </span>
              <span>
                <FaComment className="icon"/>3
              </span>
            </div>
            <div className="section4__bottom__card__right__2">
              <p>COMMENTS</p>
            </div>
            <div className="section4__bottom__card__right__3">
              <h3>Shop the Look Cottage Country Living Room</h3>
            </div>
            <div className="section4__bottom__card__right__4">
              <p>A small river named Duden flows by their place.</p>
            </div>
          </div>
          <div className="section4__bottom__card__left">
            <img
              src="https://preview.colorlib.com/theme/furnish/images/image_4.jpg.webp"
              alt=""
            />
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Section4;
