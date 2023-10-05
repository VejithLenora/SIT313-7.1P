import React from "react";
import "./App.css";

function EmailRegistration() {
  return (
    <form method="post" className="email-registration-form">
      <div className="email-registration-container">
        <div className="email-registration-content">
          <p className="email-registration-text">SIGN UP FOR OUR DAILY INSIDER</p>
          <input type="email" id="email-input-id" name="email" className="form-control" />
          <button type="submit" className="btn btn-lg btn-primary">Subscribe</button>
        </div>
      </div>
    </form>
  );
}

export default EmailRegistration;



