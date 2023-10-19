import React from "react";
import "../../components/homeContent/codingPlatform.css";

function CodingPlatform() {
  return (
    <div className="codingPlatform">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">Coding Platform</h2>
        <p className="about">
        Dive into the coding platform and practice your newfound skills.
        </p>
        <div className="startTeching button">START CODING</div>
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
