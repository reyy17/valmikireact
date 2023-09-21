import React, { useState } from "react";
import Modal from "react-modal";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useNavigate } from 'react-router-dom';
import "../../components/header/headerPrimary.css";

const baseURL = "http://localhost:14440/ashram/api/auth/v1";

function HeaderPrimary() {
  const navigate = useNavigate();
  
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
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
    fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            password: "",
            role: "",
          });
          console.log("Signup successful");
          closeSignupModal();
        } else {
          console.error("Signup failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/signin`, {
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
          console.log("Login successful");
          closeLoginModal();
        } else {
          console.error("Login failed");
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
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${formData.email}`,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Password reset request sent successfully");
          closeForgotPasswordModal();
          
        } else {
          console.error("Password reset request failed");
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
        <div className="businessDiv">Coding Platform </div> 
        <div className="teachDiv">Teach On Valmiki</div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        <div className="login button" onClick={openLoginModal}>
          Login
        </div>

        <Modal
          isOpen={isLoginModalOpen}
          onRequestClose={closeLoginModal}
          contentLabel="Login Modal"
        >
          <div className="login-popup">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
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
              <button className="forgot-password button" onClick={navigateToForgotPassword}>
  Forgot Password
</button>

              <button type="submit">Login</button>
              <button onClick={closeLoginModal}>Close</button>
            </form>
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
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
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Sign Up</button>
              <button onClick={closeSignupModal}>Close</button>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={isForgotPasswordModalOpen}
          onRequestClose={closeForgotPasswordModal}
          contentLabel="Forgot Password Modal"
        >
          <div className="forgot-password-popup">
            <h2>Forgot Password</h2>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Reset Password</button>
              <button onClick={closeForgotPasswordModal}>Close</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default HeaderPrimary;
