import React, { useState } from "react";
import Modal from "react-modal";
import "../../components/homeContent/becomeInstructor.css";

function BecomeInstructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    instructorName: "",
    experience: "",
    mobile: "",
    gender: "",
    password: "",
    status: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
    closeModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log(loginFormData);
    closeLoginPopup();
  };

  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">Become an Instructor</h2>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Valmiki. We provide the tools and skills to teach what you love.
        </p>

        <div className="startTeaching button" onClick={openModal}>
          START TEACHING TODAY
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Instructor Sign Up"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <img
              src="../about1.jpeg"
              alt="instructorImg"
              className="instructorImg"
              style={{ width: "50%", height: "100%", maxWidth: "100%" }}
            ></img>

            <div className="contentDiv">
              <h1>SignUp as Instructor</h1>
              <form onSubmit={handleSubmit} className="two-inputs-per-row">
                <div className="form-row">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <input
                      type="text"
                      name="instructorName"
                      placeholder="InstructorName"
                      value={formData.instructorName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="experience"
                      placeholder="Experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="gender"
                      placeholder="Gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="status"
                      placeholder="Status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit">Sign Up</button> <br />
                <span className="login-link"
                 style={{ cursor: "pointer" }}
                 onClick={openLoginPopup}>
                  Already have an account? Login
                </span>
                </form>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isLoginPopupOpen}
        onRequestClose={closeLoginPopup}
        contentLabel="Login Modal"
      >
         <div className="login-modal-content"> 
          <button className="close-button" onClick={closeLoginPopup}>
            X
          </button>

          <img
           src="../about1.jpeg"
           alt="instructorImg"
           className="instructorImg"
             style={{ width: "55%", height: "100%", maxWidth: "100%" }}
      ></img>

          <div className="contentDiv">
            <h1>Welcome Back</h1>
            <form onSubmit={handleLogin}>
              {/* Login fields here */}
              <input
                type="email"
                name="loginEmail"
                placeholder="Email"
                value={loginFormData.loginEmail}
                onChange={handleLoginChange}
                required
              />
              <input
                type="password"
                name="loginPassword"
                placeholder="Password"
                value={loginFormData.loginPassword}
                onChange={handleLoginChange}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  </div>
);
}

export default BecomeInstructor;

