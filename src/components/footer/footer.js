import React from "react";
import "../../components/footer/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upperDiv">
        <div className="linksContainer">
          <div className="linksDiv linksDiv1">
            <p>Coding Platform</p>
            <p>Teach on Valmiki</p> 
          </div>
          <div className="linksDiv linksDiv2">
          <p>About us</p>
          <p>Contact us</p>
           </div>
          <div className="linksDiv linksDiv3">
            <p>Featured courses</p>
            <p>Help and Support</p>
            <p> </p>
          </div>
        </div>
        <div className="linksDiv linksDiv4"></div>
      </div>
      <div className="lowerDiv">
      <div><h3>Valmiki</h3></div>
        <div className="copyrightDiv">
          <p>© 2023 Valmiki</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;