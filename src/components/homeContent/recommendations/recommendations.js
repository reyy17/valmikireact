import React from "react";
import "./recommendations.css";
import RecommendedVideos from "./recommendedVideos";

function Recommendations() {
  return (
    <div className="recommendationsDiv">
      <div className="recommendations">
        <h2>Our top picks for you</h2>
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default Recommendations;