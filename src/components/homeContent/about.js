import React from "react";
import "../../components/homeContent/about.css";

function About() {
  return (
    <div className="aboutDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://i.pinimg.com/564x/9f/ea/f9/9feaf9752d404a9bbef83eaed4b4dd86.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">About us</h2>
        <p className="about">
         Valmiki is a curated platform where students can find courses on almost any topic. It has an embedded coding platform for hands-on practice. Best part-It's totally free{" "}
        </p>
   
      </div>
    </div>
  );
}

export default About;