import React from "react";
import Header from "./Header";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";

function Mainpage() {
  return (
    <div className="App">
      <Header />
      <HomeContent />
      <HomeFooter />
    </div>
  );
}

export default Mainpage;