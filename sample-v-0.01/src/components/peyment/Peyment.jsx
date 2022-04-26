import React from "react";
import peyment from "../../assets/img/peyment.png";

function Peyment(props) {
  return (
    <section className="specialist-section d-flex flex-row justify-content-around align-items-center mt-5 pt-5 px-5 w-100">
      <div className="specialist-right d-flex flex-column justify-content-center align-items-center">
        <img src={peyment} />
      </div>

      <div className="specialist-left d-flex flex-column justify-content-start">
        <span className="text-left fw-bolder mb-2" style={{ color: "#3734A9" }}>
        Our Feature
        </span>
        <h3 className="fw-bolder mt-2 mb-4 fs-2" style={{ lineHeight: "45px" }}>
          Receive payments <br />
          quickly from anywhere
        </h3>
        <p className="fs-5" style={{ color: "#757095" }}>
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.
        </p>

        <button className="btn btn-primary mt-4 py-2" style={{width: "130px", backgroundColor: "#3734A9"}}>Get Started</button>
      </div>


    </section>
  );
}

export default Peyment;
