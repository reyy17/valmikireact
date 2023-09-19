import React from "react";
import "../../components/homeContent/codingPlatform.css";

function CodingPlatform() {
  return (
    <div className="codingPlatform">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">Coding Platform</h2>
        <p className="about">
          Get unlimited access to 4,000+ of Valmiki's top courses for your team.
        </p>
        <div className="startTeching button">Get on the Coding Platform</div>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
        alt="instructorImg"
        className="Img"
      ></img>
    </div>
  );
}

export default CodingPlatform;