import React from "react";

function Contact(props) {
  return (
    <section className="contact-section d-flex flex-row justify-content-around align-items-center pt-5 w-100">
      <span className="squar-1"></span>
      <span className="squar-2"></span>
      <div className="contact-left">
        <h3 className="fs-1 fw-bold" style={{ color: "white" }}>
          We are here to help
          <br />
          you grow your
          <br /> business
        </h3>
        <span className="curve-line"></span>
      </div>
      <div className="contact-right">
        <div className="contact-form-wrapper py-5 px-4 ">
          <span className="form-bb"></span>
          <span className="contact-circle"></span>
          <form className="contact-form d-flex flex-column">
              <label htmlFor="contact-name">NAME:</label>
              <input type="text" id="contact-name"/>
              <label htmlFor="contact-email">EMAIL:</label>
              <input type="email" id="contact-email"/>
              <label htmlFor="contact-password">PASSWORD:</label>
              <input type="password" id="contact-password"/>
              <button className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
      <span className="squar-3"></span>
      <span className="squar-4"></span>
      <span className="squar-5"></span>
    </section>
  );
}

export default Contact;
