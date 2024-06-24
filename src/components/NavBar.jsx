import React from 'react';
import './NavBar.css';
const NavBar = ({toggleModal}) => {
  return (
    <div>
      <nav className="navbar  nav mb-2 ">
        <div className="  container-fluid   "id='desktop' style={{}}>
          <img
            className="ml-10 img-responsive "
            src="/images/main image.svg"
            alt="atg world"
          />
          <div
          id="search"
            style={{
              maxWidth: "460px",
              backgroundColor: "#d3d3d3",
              marginTop: "2px",
            }}
            className=" w-100 align-items-center  justify-content-center border  px-3 rounded-pill"
          >
            <img
              width="20px"
              style={{ marginLeft: "8px" }}
              src="/images/magnify.svg"
              alt="search icon"
            />
            <input
            
              className="form-control text-dark shadow-none border-0"
              type="search"
              placeholder="Search for your favourite groups in ATG"
              aria-label="Search"
              style={{ marginLeft: "15px", backgroundColor: "#d3d3d3" }}
            />
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-center mt-1">
            <p
              className="fw-bold mt-1"
              style={{ cursor: "pointer" }}
              onClick={toggleModal}
            >
              Create account.
              
            </p>
            <span className="text-primary fw-bold " style={{marginBottom:"12px"}}>It's Free!</span>
          </div>
        </div>
        <div className="container-fluid" id="mobil"><img src="/images/nav.svg" style={{width:"51px",marginTop:"7px"}}/></div>
      </nav>
    </div>
  )
}

export default NavBar
