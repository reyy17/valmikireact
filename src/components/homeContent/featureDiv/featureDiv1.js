import React from "react";
import "./featureDiv1.css";
import FeatureCard from "./featureCard";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import StarsIcon from "@material-ui/icons/Star";

function Feature1() {
  return (
    <div className="featureDiv1">
      <div className="featureCard">
        <div className="icon"><OndemandVideoIcon className="icon" /></div>
        <div className="text">
          <h3>Go at your own pace</h3>
          <p>Learn on your schedule</p>
        </div>
      </div>
      <div className="featureCard">
        <div className="icon"><StarsIcon className="icon" /></div>
        <div className="text">
          <h3>Learn from industry experts</h3>
          <p>Enjoy a variety of fresh topics</p>
        </div>
      </div>
      <div className="featureCard">
        <div className="icon"><AllInclusiveIcon className="icon" /></div>
        <div className="text">
          <h3>Lifetime access</h3>
          <p>Enjoy lifetime access to courses on Udemy’s website</p>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
