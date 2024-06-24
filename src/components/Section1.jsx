import React from "react";
import "./Section1.css";
const Section1 = ({toggleModal}) => {
  return (
    <section
      className="main container-fluid   "
      id="section1"
      style={{ minHeight: "440px"}}
    >
      <img className="image1" src="/images/section12.svg" />
      <img className="image2" src="/images/section12mobile.svg" />
      <div className="text">
        <p className="big-text">Computer Engineering</p>
        <p className="small-text">142,765 Computer Engineers follow this</p>
      </div>
      <div className="mobile-section">
        <p className="arrow">
          <img src="/images/arrow.svg" alt="" style={{width:"30px"}}/>
        </p>
        <button onClick={toggleModal} className="join">Join Group</button>
      </div>
    </section>
  );
};

export default Section1;



