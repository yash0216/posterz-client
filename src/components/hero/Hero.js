import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive print an art work</h2>
        <p className="subheading">Exclusive print an art work</p>
        <button
          className="cta btn-primary"
          onClick={() => navigate("/category")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Hero;
