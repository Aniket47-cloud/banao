import React from "react";
import './Section2.css';
const Section2 = () => {
  return (
<div className="container-fluid mt-3  " style={{ maxWidth: "1296px" }}>
    <div
        className="d-lg-flex d-md-flex desk  justify-content-between w-100 align-items-center mb-2 d-sm-none  "
        style={{
          borderBottom: "1px solid #d3d3d3",
          maxWidth: "1040px",
          margin: "auto",
          flexWrap:"wrap"
        }}>
        <div
          className="d-flex justify-content-between   "
          style={{ flex: "wrap", gap: "3px", width: "350px" }}
        >
          <div className="hover-border">
            <p
              href="#"
              className="mr-3 text-dark mt-3  "
              style={{ cursor: "pointer" }}
            >
              All Posts (32)
            </p>
          </div>
          <div className="hover-border">
            <p
              href="#"
              className="mr-3 text-dark mt-3  "
              style={{ cursor: "pointer" }}
            >
              Article
            </p>
          </div>
          <div className="hover-border">
            <p
              href="#"
              className="mr-3 text-dark mt-3 "
              style={{ cursor: "pointer" }}
            >
              Event
            </p>
          </div>
          <div className="hover-border">
            <p
              href="#"
              className="mr-3 text-dark mt-3 "
              style={{ cursor: "pointer" }}
            >
              Education
            </p>
          </div>
          <div className="hover-border">
            <p
              href="#"
              className="text-dark  mt-3 "
              style={{ cursor: "pointer" }}
            >
              Job
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 ">
          <button
            className="btn btn-outline-secondary dropdown-toggle mr-2"
            type="button"
          >
            Write a Post
          </button>
          <button className="btn btn-primary">Join Group</button>
        </div>
    </div>
    <div className="android d-sm-flex justify-content-between w-100 d-md-none d-lg-none " >
       <p className="mt-2 fw-bold">Posts(368)</p>
       <div className="dropdown-toggle "style={{backgroundColor:"#d3d3d3", padding:"8px", paddingInline:"10px"}}>
        Filter:All
       </div>
    </div>
    </div>
  );
};

export default Section2;
