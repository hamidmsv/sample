import React from "react";

function Features(props) {
  return (
    <section className="features-section d-flex flex-column mt-5 px-5 w-100">
      <div className="ps-3">
        <h1>Features that blows mind</h1>
        <p className="fs-5 mt-4 mb-4" style={{ color: "#757095" }}>
          End-to-end payments and financial management in a <br />
          single solution. Meet the right platform to help realize.
        </p>
      </div>
      <div className="features-cards d-flex flex-row justify-content-between mt-3">
        <div>
        <div className="features-cart py-5 px-4 ">
            <span className="cart-bb"></span>
            <span>
              <svg
                width="56"
                height="45"
                viewBox="0 0 56 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="15" width="55.2795" height="30" fill="#FF7F5C" />
                <rect width="43.118" height="10" fill="#3734A9" />
              </svg>
            </span>

            <h3 className="features-title text-right fs-4 fw-bolder mt-4">
              Modern Cards
            </h3>
            <p className="features-cart-text text-right">
              End-to-end payments and financial management in a single solution.
              Meet the right platform.
            </p>
          </div>
        </div>
        <div>
          <div className="features-cart py-5 px-4 ">
            <span className="cart-bb"></span>
            <span>
              <svg
                width="56"
                height="45"
                viewBox="0 0 56 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="15" width="55.2795" height="30" fill="#FF7F5C" />
                <rect width="43.118" height="10" fill="#3734A9" />
              </svg>
            </span>

            <h3 className="features-title text-right fs-4 fw-bolder mt-4">
              Modern Cards
            </h3>
            <p className="features-cart-text text-right">
              End-to-end payments and financial management in a single solution.
              Meet the right platform.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="features-cart">
            <span className="cart-bb"></span>

            <h3 className="p-3 text-right fs-4 fw-bolder">
              Save money year-round
            </h3>
          </div>
          <div className="features-cart">
            <span className="cart-bb"></span>

            <h3 className="p-3 text-right fs-4 fw-bolder">
              100+ Apps Powerful integrations
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
