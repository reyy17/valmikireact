import React, { useState } from "react";
import Modal from "react-modal";
import "../../components/header/headerPrimary.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function HeaderPrimary() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle form submission for signup, e.g., send data to the server
    // add validation and API calls here
    console.log(formData);
    closeSignupModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle form submission for login, e.g., send data to the server
    // add validation and API calls here
    console.log(formData);
    closeLoginModal();
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

        {/* Login Modal */}
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
                name="username"
                placeholder="Username"
                value={formData.username}
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
                name="username"
                placeholder="Username"
                value={formData.username}
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
      </div>
    </div>
  );
}
export default HeaderPrimary;
