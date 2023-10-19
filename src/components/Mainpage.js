import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./Header";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import Secondpage from "./Secondpage"; 

function Mainpage() {
  return (
    <Router> {/* Wrap the Mainpage component with Router */}
    <Routes>
        <Route path="/Secondpage" element={<Secondpage />} />
        {/* Add other routes as needed */}
      </Routes>
      <div className="App">
        <Header />
        <HomeContent />
        <HomeFooter />
      </div>
    </Router>
  );
}

export default Mainpage;
