import React from "react";
import { Button } from "react-bootstrap";
import avatar06 from "../../assets/img/avatar06.png";
import avatar07 from "../../assets/img/avatar07.png";
import avatar08 from "../../assets/img/avatar08.png";
import avatar09 from "../../assets/img/avatar09.png";
import avatar10 from "../../assets/img/avatar10.png";
import icn01 from "../../assets/img/icn-1.png";
import icn02 from "../../assets/img/icn-2.png";
import icn03 from "../../assets/img/icn-3.png";

function Header() {
  return (
    <div className="site-header w-100">
      <div>
        <img src={avatar06} alt="" id="avatar-1" />
        <span id="h-line-1"></span>
        <span id="v-line-2"></span>
        <span id="h-line-2"></span>
        <div className="header-box-01 rounded">
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20.5 20.5M20.5 20.5H7.5M20.5 20.5V8"
                  stroke="#2FE6C8"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$500</p>
              <p className="fs-6 mb-0">Received</p>
            </span>
          </div>
        </div>

        <img src={icn01} alt="" id="icn-1" />
      </div>

      <div>
        <img src={avatar07} alt="" id="avatar-2" />
        <span id="v-line-3"></span>
        <span id="v-line-4"></span>
        <span id="h-line-3"></span>
        <img src={avatar08} alt="" id="avatar-3" />

        <div className="header-box-02 rounded d-flex flex-column justify-content-between align-items-start">
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20.5 20.5M20.5 20.5H7.5M20.5 20.5V8"
                  stroke="#2FE6C8"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$1200</p>
              <p className="fs-6 mb-0">Received</p>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 20.5L20.5 2M20.5 2H7.5M20.5 2V14.5"
                  stroke="#F9896B"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$590</p>
              <p className="fs-6 mb-0">Refunded</p>
            </span>
          </div>
        </div>

        <img src={icn02} alt="" id="icn-2" />
      </div>

      <div>
        <img src={avatar09} alt="" id="avatar-4" />
        <span id="h-line-4"></span>
        <span id="v-line-5"></span>
        
        <img src={avatar08} alt="" id="avatar-3" />

        <div className="header-box-02 rounded d-flex flex-column justify-content-between align-items-start">
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20.5 20.5M20.5 20.5H7.5M20.5 20.5V8"
                  stroke="#2FE6C8"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$1200</p>
              <p className="fs-6 mb-0">Received</p>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 20.5L20.5 2M20.5 2H7.5M20.5 2V14.5"
                  stroke="#F9896B"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$590</p>
              <p className="fs-6 mb-0">Refunded</p>
            </span>
          </div>
        </div>

        <img src={icn03} alt="" id="icn-3" />
        <span id="h-line-5"></span>
        <span id="v-line-6"></span>
        <img src={avatar10} alt="" id="avatar-5" />
        <div className="header-box-03 rounded">
          <div className="d-flex flex-row justify-content-reverse bg-white align-items-center ms-3">
            <span
              className="d-flex justify-content-center align-items-center rounded"
              style={{
                width: "50px",
                height: "50px",
                background: "#F9FAFF",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L20.5 20.5M20.5 20.5H7.5M20.5 20.5V8"
                  stroke="#2FE6C8"
                  stroke-width="3"
                />
              </svg>
            </span>
            <span className="d-flex flex-column " style={{ height: "50px" }}>
              <p className="fs-6 fw-bolder mb-0">$500</p>
              <p className="fs-6 mb-0">Received</p>
            </span>
          </div>
        </div>

      </div>
      <div className="site-header-content">
        <h1
          className="site-header-content-title text-center px-3"
          style={{ fontSize: "3.5rem" }}
        >
          Managing freelance payments
          <br /> has never been easier
        </h1>
        <p className="site-header-content-suntitle text-center mt-2">
          End-to-end payments and financial management in a <br />
          single solution. Meet the right platform to help realize.
        </p>
        <div className="site-header-content-btns d-flex flex-row justify-center justify-content-center">
          <Button
            className="btn btn-primary me-1"
            style={{
              backgroundColor: "#4F46BA",
              border: "none",
              padding: "10px 30px",
            }}
          >
            Get Started
          </Button>
          <Button
            className="btn btn-outline-dark ms-1"
            style={{
              border: "none",
              padding: "10px 15px",
              background: "#F7F9FB",
              fontWeight: "500",
              color: "#3734A9",
            }}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
