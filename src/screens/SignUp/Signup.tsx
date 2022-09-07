import React, { useState } from "react";
export default function Signup() {
  const initialUserDetailsState = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    mobileNumber: "",
    isTeacher: false,
  };
  const [userDetails, setUserDetails] = useState({ initialUserDetailsState });
  const handleChange = (key: string, value: any) => {
    const newState = { ...userDetails, key: value };
    setUserDetails(newState);
  };
  return (
    <div>
      <div className="container flex justify-between">
        <section className="flex-48">
          <img src="/assets/images/login_image.png" alt="" className="img" />
        </section>
        <section className="flex-48 flex justify-center align-center">
          <form action="" className="width-60 login-form-container">
            <div className="flex justify-between">
              <div className="flex flex-column">
                <label htmlFor="" className="input-label">
                  First Name:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="for eg: Rahul"
                  className="form-controller"
                />
              </div>
              <div className="flex flex-column">
                <label htmlFor="" className="input-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="for eg: Jassal"
                  className="form-controller"
                />
              </div>
            </div>
            <div className="flex flex-column margin-top-10">
              <label htmlFor="" className="input-label">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Please enter your email"
                className="form-controller"
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="" className="input-label">
                Enter a Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-controller"
                placeholder="Please enter your password"
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="" className="input-label">
                Reenter a Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-controller"
                placeholder="Please reenter your password"
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="" className="input-label">
                Mobile Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="enter your mobile number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                required
                className="form-controller"
              />
            </div>
            <div className="margin-top-10 flex">
              <label htmlFor="" className="input-label margin-right-10">
                Joining as a Teacher:
              </label>
              <input type="checkbox" required className="" />
            </div>
            <div>
              <button className="width-100 primary-button login-button margin-top-10">
                Sign up
              </button>
            </div>
            <div className="flex justify-between margin-top-10"></div>
          </form>
        </section>
      </div>
    </div>
  );
}
