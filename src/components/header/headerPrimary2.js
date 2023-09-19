import React, { useState } from "react";
import "../../components/header/headerPrimary.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";


function HeaderPrimary2() {

  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.jpg" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">Coding Platform</div>
        <div className="teachDiv">Teach on Valmiki </div>
        <div className="sign up"> My courses</div>
        <div className="cartDiv">
          < PersonOutlineIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary2;
