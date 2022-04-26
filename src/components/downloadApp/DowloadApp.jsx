import React from "react";

function DowloadApp(props) {
  return (
    <section className="downloadApp-section d-flex justify-content-center align-items-center flex-column w-100 mt-5 py-5">
      <div className="downloadApp text-center">
        <span
          className="text-center fw-bolder mb-2"
          style={{ color: "#3734A9" }}
        >
          Project Management App
        </span>
        <h3 className="fw-bolder mt-2 mb-4 fs-2" style={{ lineHeight: "45px" }}>
          Download our free project management app for clients
        </h3>
        <p className="fs-6" style={{ color: "#757095" }}>
          End-to-end payments and financial management in a single solution.
        </p>
        <div className="d-flex flex-row justify-content-center">
          <button
            className="btn rounded-pill px-4 mx-2"
            style={{ backgroundColor: "#3734A9", color: "white" }}
          >
            Play Store
          </button>
          <button
            className="btn rounded-pill px-4 mx-2"
            style={{ backgroundColor: "#FF7F5C", color: "white" }}
          >
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}

export default DowloadApp;
