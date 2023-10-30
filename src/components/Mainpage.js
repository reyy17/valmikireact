import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Header from "./Header";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";

function Mainpage() {
  return (
    <Router> {/* Wrap the Mainpage component with Router */}
      <div className="App">
        <Header />
        <HomeContent />
        <HomeFooter />
      </div>
    </Router>
  );
}

export default Mainpage;
