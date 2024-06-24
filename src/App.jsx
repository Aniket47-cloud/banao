import "./App.css";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import { useState } from "react";
import Section2 from "./components/Section2";
import Posts from "./components/Posts";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowSignInModal(false);
  };
  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
    // Function to toggle Sign In modal
    setShowModal(false);
  };

  return (
    <div>
      <NavBar toggleModal={toggleModal} />
      <Section1 toggleModal={toggleModal} />
      <Section2/>
      <Posts/>

     
      {showSignInModal && (
        <div className="modal-backdrop">
          <div
            className="form-container "
            style={{ width: "750px", height: "553px" }}
          >
            <button className="close-button" onClick={toggleSignInModal}>
              &times;
            </button>
            <div className="row">
              <div id="title-head"className="col-md-6 p-5  ">
                <h2 id="title" className="mb-5">Sign In</h2>
                <h2 className=" welcome mb-5">Welcome Back</h2>
                <form className="bg-tertiary">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="sign">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-3 btn-block "
                  >
                    Sign In
                  </button>
                  <p onClick={toggleModal} className="create">or,Create Account</p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-light mt-5 btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/Logo-Search-Google--on-transparent-background-PNG.png"
                      />
                    </span>
                    Sign Up with Google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-1  btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/download.png"
                      />
                    </span>
                    Sign Up with Facebook
                  </button>
                  <p id="forgot" className="fw-bold mt-2">
                    Forgot Password ?
                  </p>
                </form>
              </div>
              <div
              id="signin-mobile"
                className="col-md-6  flex-column  align-items-center"
                style={{ marginTop: "80px" }}
              >
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary fw-bold"
                    onClick={toggleModal}
                    style={{ cursor: "pointer" }}
                  >
                    Create new for free
                  </span>
                </p>
                <img
                  src="/images/form.svg"
                  alt="Illustration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal-backdrop">
          <div
            className="form-container "
            style={{ width: "750px", height: "553px" }}
          >
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <div className="row">
              <div id="title-head" className="col-md-6 p-5  ">
                <h2 className="mb-5">Create Account</h2>
                <form className="bg-tertiary">
                  <div className="d-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="sign">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-3 btn-block "
                  >
                    Create Account
                  </button>
                  <p onClick={toggleSignInModal} className="create">or,Sign In</p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-light mt-5 btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/Logo-Search-Google--on-transparent-background-PNG.png"
                      />
                    </span>
                    Sign Up with Google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light mt-1  btn-block w-100"
                  >
                    <span>
                      <img
                        style={{ width: "25px", marginRight: "5px" }}
                        src="/images/download.png"
                      />
                    </span>
                    Sign Up with Facebook
                  </button>
                </form>
                <img className="write" src="/images/write2.svg" alt="" />
              </div>
              <div 
                id="signin-mobile"
                className="col-md-6  flex-column  align-items-center"
                style={{ marginTop: "80px" }}
              >
                <p>
                  Already Have an account?{" "}
                  <span
                    onClick={toggleSignInModal}
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                  >
                    Sign In
                  </span>
                </p>
                <img
                  src="/images/form.svg"
                  alt="Illustration"
                  className="img-fluid"
                />
                <img src="/images/write.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
