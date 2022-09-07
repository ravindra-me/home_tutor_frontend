import React from "react";

function VerifyEmail() {
  return (
    <div className="flex flex-column verify-email-container">
      <label htmlFor="" className="input-label">
        Verify Email
      </label>
      <input
        type="text"
        className="form-controller"
        placeholder="Enter the mail"
      />
      <div className="flex justify-end margin-top-10">
        <button className="primary-button">Verify</button>
      </div>
    </div>
  );
}

export default VerifyEmail;
