import React from "react";
import "../../components/homeContent/about.css";

function About() {
  return (
    <div className="aboutWrapper">
     <div className="imgbox">

  <img
           src="../about_final.jpg"
           alt="aboutImg"
           className="aboutImg"
             style={{ width: "130%", height: "100%", maxWidth: "100%" }}
      ></img></div>

  <div className="contentDiv">
    <h2 className="heading">VALMIKI</h2>
    <h4 className="liner">"Where curiosity meets classroom"</h4>
    <p className="about">
    Unlock the limitless world of knowledge and transform your future!
    </p>
    <button type="submit"> Check courses</button>
  </div>
</div>

  );
}

export default About;
