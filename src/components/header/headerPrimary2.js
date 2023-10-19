import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../../components/header/headerPrimary2.css";



function HeaderPrimary() {

  return (
    <div className="headerPrimary">
      <div className="left part">
       <div><h3>Valmiki</h3></div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
      <Link to="/daily-assignments" className="businessDiv" style={{ cursor: "pointer" }}>
          Daily Assignments
        </Link>

        <div className="businessDiv" style={{ cursor: "pointer" }}>Coding Platform </div> 
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" style={{ fontSize: 30 }} />
        </div>
        <div className="profileIcon">
        <AccountCircleIcon className="icon" style={{ fontSize: 35 }} />
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
