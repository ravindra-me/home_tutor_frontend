import React, { useState } from "react";
import { connect } from "react-redux";
import { api } from "../../config/config";
import { validateForm } from "../../utils/utils";
import { updateAlertInfo } from "../../redux/reducers/userSlice";

type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

function Signup(props: any) {
  const { userInfo, updateAlertInfo } = props;
  console.log(userInfo);

  const initialUserDetailsState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    reEnterPassword: "",
    isTeacher: false,
  };
  const [userDetails, setUserDetails] = useState({
    ...initialUserDetailsState,
  });
  const [error, setError] = useState("");
  const handleChange = (event: InputEvent) => {
    const { name, value } = event.target;
    const newState = { ...userDetails, [name]: value };
    setUserDetails(newState);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validate = validateForm(userDetails, setError);
    if (validate) {
      console.log("hello i am ok");
    } else {
      updateAlertInfo({ open: true, message: error });
    }
  };

  return (
    <div>
      <div className="container flex justify-between">
        <section className="flex-48">
          <img src="/assets/images/login_image.png" alt="" className="img" />
        </section>
        <section className="flex-48 flex justify-center align-center">
          <form
            action=""
            className="width-60 login-form-container"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between">
              <div className="flex flex-column">
                <label htmlFor="firstName" className="input-label">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="for eg: Rahul"
                  className="form-controller"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-column">
                <label htmlFor="lastName" className="input-label">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="for eg: Jassal"
                  className="form-controller"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-column margin-top-10">
              <label htmlFor="email" className="input-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                className="form-controller"
                onChange={handleChange}
                required
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="password" className="input-label">
                Enter a Password:
              </label>
              <input
                type="password"
                name="password"
                className="form-controller"
                placeholder="Please enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="reEnterPassword" className="input-label">
                Reenter a Password:
              </label>
              <input
                type="password"
                name="reEnterPassword"
                className="form-controller"
                placeholder="Please reenter your password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="mobileNumber" className="input-label">
                Mobile Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="mobileNumber"
                placeholder="enter your mobile number"
                required
                className="form-controller"
                onChange={handleChange}
              />
            </div>
            <div className="margin-top-10 flex">
              <label
                htmlFor="isTeacher"
                className="input-label margin-right-10"
              >
                Joining as a Teacher:
              </label>
              <input
                type="checkbox"
                name="isTeacher"
                className=""
                onChange={() => {
                  setUserDetails((pre) => {
                    return { ...userDetails, isTeacher: !pre.isTeacher };
                  });
                }}
              />
            </div>
            <div>
              <button
                className="width-100 primary-button login-button margin-top-10"
                type="submit"
              >
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

const mapStateToProps = (state: any) => ({
  userInfo: state,
});

const mapDispatchToProps = {
  updateAlertInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
