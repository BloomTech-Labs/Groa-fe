import React, { useEffect } from "react";
import { signInWidget } from "./signInWidget.js";

// import { connect } from "react-redux";
// import { loginAction } from "../../store/actions/loginAction";
import GroaLogo from "../auth/Groa-logo-B2AA.png";
import { ifDev } from "../../utils/removeAttribute.js";
import LoginNavLinks from "../layout/nav-layouts/LoginNavLinks.js";

export default function Login() {
  useEffect(() => {
    // renders widget
    signInWidget.renderEl(
      { el: "#sign-in-widget" },
      () => {},
      error => {
        throw error;
      }
    );
    // unmounts widget
    return function cleanup() {
      signInWidget.remove();
    };
  }, []);

  return (
    <div
      className="container login-component"
      data-test={ifDev("login-component")}
    >
      <div className="onboarding-nav login-nav">
        <LoginNavLinks />
      </div>
      <div className="box-container">
        <div className="box-left">
          <img className="logo" src={GroaLogo} alt="Groa Logo" />
        </div>
        <div id="sign-in-widget" className="box-right" />
      </div>
    </div>
  );
}
