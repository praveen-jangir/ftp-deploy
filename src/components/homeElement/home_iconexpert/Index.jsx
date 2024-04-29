import React from 'react'
// import { NavLink } from "react-router-dom";
import { whatAre } from "./HomeIcondata";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Diamond from '../../layout/Diamond';


export default function Iconexperts() {
  return (
    <>

      <div className="icon-section">
        <div className="heading text-center">
          <h2 className="ttl">Believed By The Students of </h2>
          <Diamond />
        </div>
        <div className='Marquee-content'>
          {whatAre.map((whatwe) => {
            const { image, alter } = whatwe;
            return (
              <>
                <div className="Marquee-tag">
                  <img src={image} width={120} height={120} alt={alter} className='owl-image' />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
