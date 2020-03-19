import * as OktaSignIn from "@okta/okta-signin-widget";
import { oktaConfig } from "../../config/oktaConfig.js";

let { issuer, clientId, redirectUri, pkce, scopes } = oktaConfig;

export const signInWidget = new OktaSignIn({
  /**
   * Note: when using the Sign-In Widget for an OIDC flow, it sill
   * needs to be configured with the base URL for your Okta Org. Here
   * we derive it from the given issuer for convenience.
   */
  baseUrl: issuer.split("/oauth2")[0],
  clientId,
  redirectUri,
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
