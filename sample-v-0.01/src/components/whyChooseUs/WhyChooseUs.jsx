import React from "react";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";
import avatar03 from "../../assets/img/avatar03.png";
import avatar04 from "../../assets/img/avatar04.png";
import avatar05 from "../../assets/img/avatar05.png";

function WhyChooseUs(props) {
  return (
    <section className="why-choose-us-section d-flex flex-row justify-content-around mt-5 pt-5 w-100 px-5">
 
          <div className="why-choose-us-left">
            <div className="quick-transfer">
              <span className="quick-transfer-dots"></span>
              <span className="quick-transfer-circle-top"></span>
              <div className="quick-transfer-content">
                <span className="quick-transfer-content-bb"></span>
                <h3 className="ms-4 fs-4 fq-bolder mt-4">Quick Transfers</h3>
                <div className="d-flex flex-row mx-4 pt-4 justify-content-between">
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="q-t-avatar rounded-circle"
                      src={avatar01}
                      alt=""
                    />
                    <p className="text-center">Derek</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="q-t-avatar rounded-circle"
                      src={avatar02}
                      alt=""
                    />
                    <p className="text-center">Derek</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="q-t-avatar rounded-circle"
                      src={avatar03}
                      alt=""
                    />
                    <p className="text-center">Derek</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="q-t-avatar rounded-circle"
                      src={avatar04}
                      alt=""
                    />
                    <p className="text-center">Derek</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <img
                      className="q-t-avatar rounded-circle"
                      src={avatar05}
                      alt=""
                    />
                    <p className="text-center">Derek</p>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h3 className="ms-4 fs-5 fq-bolder mt-3">Provide Amount</h3>

                  <div class="amount mb-4 mx-4 mt-3">
                    <div class="amount-percentage"></div>
                  </div>
                </div>
              </div>

              <div className="wallet-overview d-flex flex-row">
                <div className="deposits d-flex flex-column justify-content-center">
                  <p className="fw-normal mb-0" style={{ fontSize: "14px" }}>
                    Deposits
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <p className="fs-4 fw-bolder mb-0">$9350</p>
                    <span className="d-flex flex-row justify-content-center align-items-center">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 12V1.5M5.5 1.5L1.5 5.5M5.5 1.5L9.5 5.5"
                          stroke="#FDBC64"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="fs-5 mb-0" style={{ color: "#FDBC64" }}>
                        %8.46
                      </p>
                    </span>
                  </div>
                  <div class="deposits-amount mt-2">
                    <div
                      class="deposits-percentage"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="expenses d-flex flex-column justify-content-center">
                  <p className="fw-normal mb-0" style={{ fontSize: "14px" }}>
                    Expenses
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <p className="fs-4 fw-bolder mb-0">$9350</p>
                    <span className="d-flex flex-row justify-content-center align-items-center">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 1.5V12M5.5 12L1.5 8M5.5 12L9.5 8"
                          stroke="#3734A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="fs-5 mb-0" style={{ color: "#3734A9" }}>
                        %11.28
                      </p>
                    </span>
                  </div>
                  <div class="expenses-amount mt-2">
                    <div
                      class="expenses-percentage"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <span className="quick-transfer-zigzag-1">
                <svg
                  width="20"
                  height="126"
                  viewBox="0 0 20 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.5L16 16.5L6 26.5L14.5 35L6 43.5L14.5 52L6 60.5L14.5 69L6 77.5L14.5 86L6 94.5L14.5 103L6 111.5L14.5 120"
                    stroke="#E6EFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="14"
                    cy="120"
                    r="5"
                    transform="rotate(90 14 120)"
                    fill="#002F86"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    transform="rotate(90 6 6)"
                    fill="#002F86"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </span>

              <span className="quick-transfer-zigzag-2">
                <svg
                  width="20"
                  height="126"
                  viewBox="0 0 20 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.5L16 16.5L6 26.5L14.5 35L6 43.5L14.5 52L6 60.5L14.5 69L6 77.5L14.5 86L6 94.5L14.5 103L6 111.5L14.5 120"
                    stroke="#E6EFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="14"
                    cy="120"
                    r="5"
                    transform="rotate(90 14 120)"
                    fill="#002F86"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    transform="rotate(90 6 6)"
                    fill="#002F86"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </span>

              <span className="quick-transfer-circle-bottom"></span>
            </div>
          </div>

          <div className="why-choose-us-right">
            <span
              className=" text-center fw-bolder mb-3"
              style={{ color: "#3734A9" }}
            >
              Why Choose Us
            </span>
            <h3
              className="fw-bold mt-3 mb-4 fs-1"
              style={{ lineHeight: "60px" }}
            >
              Track your crytpo
              <br />
              portfolio on the
              <br />
              best way possible
            </h3>
            <p className="fs-5 mb-4" style={{ color: "#757095" }}>
              End-to-end payments and financial management in a <br /> single
              solution. Meet the right platform to help realize.
            </p>

            <span className="divider"></span>

            <div className="d-flex flex-column mt-4 w-100 why-choose-us-items">
              <div className="d-flex flex-row">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FDBC64" />
                    <path
                      d="M8 12L10.8 15L16 9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="ms-3 fs-5">Get Overview at a glance</p>
              </div>
              <div className="d-flex flex-row">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FDBC64" />
                    <path
                      d="M8 12L10.8 15L16 9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="ms-3 fs-5">Deoposit funds easily, securlity</p>
              </div>
              <div className="d-flex flex-row">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FDBC64" />
                    <path
                      d="M8 12L10.8 15L16 9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="ms-3 fs-5">Get Live Support</p>
              </div>
            </div>
          </div>
       
    </section>
  );
}

export default WhyChooseUs;
