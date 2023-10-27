
import React, { useState } from "react";
import Modal from "react-modal";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useNavigate } from 'react-router-dom';
import "../../components/header/headerPrimary.css";
import Secondpage from "../Secondpage";

const baseURL = "http://localhost:14440/ashram/api/auth/v1";

function HeaderPrimary() {
  const navigate = useNavigate();
  
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    mobile: "",
    gender: "",
    profession: "",
    address: ""
  });


  const navigateToForgotPassword = () => {
    setForgotPasswordModalOpen(true);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setForgotPasswordModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/registeruser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        username: formData.username,
        mobile: formData.mobile,
        gender: formData.gender,
        profession: formData.profession,
        address: formData.address
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Signup successful", response.data);
          closeSignupModal(); 
          navigate.push("/secondpage");
        } else {
          console.log("Signup error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Login success", response);
          closeLoginModal(); // Close the login modal
          navigate.push("/secondpage");
        } else {
          console.log("Login error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  const handleResetPassword = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Change content type
      },
      body: JSON.stringify({
        email: formData.email,
        resetToken: formData.resetToken, // Make sure you set the resetToken
      }),
    })
      .then((response) => {
        console.log('Response:', response);
        if (response.status === 200) {
          console.log("Email sent");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  

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
        <div className="businessDiv" style={{ cursor: "pointer" }}>Coding Platform </div> 
        <div className="teachDiv" style={{ cursor: "pointer" }}>Teach On Valmiki</div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        <div className="login button" onClick={openLoginModal}>
          Login
        </div>

        <Modal
          isOpen={isLoginModalOpen}
          onRequestClose={closeLoginModal}
          contentLabel="Login Modal">

          <div className="login-popup">
          <button className="close-button" onClick={closeLoginModal}> X </button> 

          <img
           src="../about1.jpeg"
           alt="instructorImg"
           className="instructorImg"
             style={{ width: "130%", height: "100%", maxWidth: "100%" }}
      ></img>
          
          <div className="contentDiv">
            <h1>Welcome Back</h1>
            <form onSubmit={handleLogin}>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <span
               className="forgot-password-link"
               onClick={navigateToForgotPassword}
               style={{ cursor: "pointer" }}
>
                 Forgot Password?</span>
              <button type="submit">Login</button>
              
            </form>
            </div>
            </div>
        </Modal>

        <div className="signup button" onClick={openSignupModal}>
          Sign up
        </div>

        <Modal
          isOpen={isSignupModalOpen}
          onRequestClose={closeSignupModal}
          contentLabel="Sign Up Modal"
        >
          <div className="signup-popup">
          <button className="close-button" onClick={closeSignupModal}> X </button> 
          <img
          src="../about1.jpeg" 
           alt="instructorImg"
           className="instructorImg"
           style={{ width: "130%", height: "100%", maxWidth: "100%" }}
      ></img>

           <div className="contentDiv">
            <h1>Create Account</h1>
            <form onSubmit={handleSignup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              {/* <input
                type="text"
                name="userid"
                placeholder="UserId"
                value={formData.userid}
                onChange={handleInputChange}
                required
              /> */}
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.modile}
                onChange={handleInputChange}
                required
              />
               <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              />
               <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleInputChange}
                required
              />
                <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
               {/* <input
                type="text"
                name="resetToken"
                placeholder="Reset Token"
                value={formData.resetToken}
                onChange={handleInputChange}
                required
              /> */}
              <button type="submit">Sign Up</button>
            </form>
          </div>
          </div>
        </Modal>

        <Modal
          isOpen={isForgotPasswordModalOpen}
          onRequestClose={closeForgotPasswordModal}
          contentLabel="Forgot Password Modal"
        >
          <div className="forgot-password-popup">
          <button className="close-button" onClick={closeForgotPasswordModal}> X </button> 
          <img
          src="../forgot_pass.jpeg" 
           alt="forgotImg"
           className="forgotImg"
           style={{ width: "130%", height: "100%", maxWidth: "100%" }}>
           </img>

            <div className="contentDiv">
            <h1>Forgot Password ?</h1>
            <span
               className="reset">
                Enter the email address associated <br /> with your account</span>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              
              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default HeaderPrimary;
