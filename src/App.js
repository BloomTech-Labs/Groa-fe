import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { oktaConfig as config } from "./config/oktaConfig.js";

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Recommendations from "./components/dashboard/Recommendations.js";
import Navigation from "./components/dashboard/navigation.js";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import DataUpload from "./components/auth/dataUpload";

// for testing
import { ifDev } from "./utils/removeAttribute.js";

// config imports
import reactGAinitialization from "./config/analytics.js";

// creating the store
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store/reducers";
import { BrowserRouter as Router } from "react-router-dom";
import { loadState, saveState } from "./store/localStorage.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  loadState(),
  composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  saveState(store.getState());
});

function App() {
  useEffect(() => reactGAinitialization(), []);

  return (
    <Provider store={store}>
      <Security {...config}>
        <Router>
          <div className="App" data-test={ifDev("App-component")}>
            {/* this is fine as a route because all of the routes that will have display their component will only be avalible on a private route */}
            <Route
              exact
              path={[
                "/:userid/recommended",
                "/:userid/trending",
                "/:userid/watchlist",
                "/:userid/explore",
                "/:userid/upload"
              ]}
              component={Navigation}
            />
            <PrivateRoute
              exact
              path="/:userid/recommended"
              component={Recommendations}
              data-test={ifDev("dash-component")}
            />
            <Route exact path="/:userid/upload" component={DataUpload} />
            <Route path="/implicit/callback" component={LoginCallback} />
            <Route path="/login" component={Login} />
            <Route exact path={["/", "/register"]} component={Register} />
          </div>
        </Router>
      </Security>
    </Provider>
  );
}

export default App;
