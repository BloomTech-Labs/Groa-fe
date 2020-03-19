import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { oktaConfig as config } from "../../config/oktaConfig.js";

import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import GroaLogo from "../auth/Groa-logo-B2AA.png";
import { ifDev } from "../../utils/removeAttribute.js";
import LoginNavLinks from "../layout/nav-layouts/LoginNavLinks.js";

export default function Login() {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    const widget = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it sill
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: issuer.split("/oauth2")[0],
      clientId,
      redirectUri,
      logo: { GroaLogo },
      i18n: {
        en: {
          "primaryauth.title": "Sign in to Groa"
        }
      },
      authParams: {
        pkce,
        issuer,
        display: "page",
        scopes
      }
    });

    widget.renderEl(
      {
        el: "#sign-in-widget"
      },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta or for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
    return function cleanup() {
      this.widget.remove();
    };
  }, []);

  return (
    <div className="container login-component">
      <div className="onboarding-nav login-nav">
        <LoginNavLinks />
      </div>
      <div>
        <div id="sign-in-widget" />
      </div>
    </div>
  );
}
