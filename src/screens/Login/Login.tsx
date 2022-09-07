import React, { useState } from "react";
import { Link } from "react-router-dom";

//import custom component
import Modal from "../../components/Modal/Modal";
import VerifyEmail from "../../components/VerifyEmail/VerifyEmail";
export default function Login() {
  const [openModal, setOpenModal] = useState({ open: false, component: null });
  const modalOpen = (component: any) => {
    setOpenModal(() => {
      return { ...openModal, open: true, component };
    });
  };

  const modalClose = () => {
    setOpenModal(() => {
      return { ...openModal, open: false, component: null };
    });
  };
  return (
    <div>
      <div className="container flex justify-between">
        <section className="flex-48">
          <img src="/assets/images/login_image.png" alt="" className="img" />
        </section>
        <section className="flex-48 flex justify-center align-center">
          <form action="" className="width-60 login-form-container">
            {/* <div>
              <h2 className="secondary-heading">Login</h2>
            </div> */}
            <div className="flex flex-column">
              <label htmlFor="" className="input-label">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="Please enter the name"
                className="form-controller"
              />
            </div>
            <div className="margin-top-10">
              <label htmlFor="" className="input-label">
                Password:
              </label>
              <input type="text" name="password" className="form-controller" />
            </div>
            <div>
              <button className="width-100 primary-button login-button margin-top-10">
                Log In
              </button>
            </div>
            <div className="flex justify-between margin-top-10">
              <p className="text">
                No account yet? <Link to="/signup">Sign up</Link>
              </p>
              <p
                className="forgot-password"
                onClick={() => {
                  modalOpen(<VerifyEmail />);
                }}
              >
                forgot password?
              </p>
            </div>
          </form>
        </section>
        {openModal && (
          <Modal modalComponent={openModal} handleDialogClose={modalClose} />
        )}
      </div>
    </div>
  );
}
