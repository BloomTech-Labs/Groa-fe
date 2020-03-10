import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ifDev } from "./utils/removeAttribute.js";

// local imports
import PrivateRoute from "./utils/privateRoute.js";
import Dashboardv1 from "./components/dashboard/dashboardv1.js";

import Navigation from "./components/dashboard/navigation.js";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";

// config imports
import reactGAinitialization from "./config/analytics.js";

// creating the store
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => reactGAinitialization(), []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App" data-test={ifDev("App-component")}>
            <Route
              path="/login"
              render={props => (
                <Login {...props} token={token} updateToken={setToken}/>
              )}
            />
            <Route
              exact
              path="/"
              render={props => (
                <Register {...props} token={token} updateToken={setToken}/>
              )}
            />
            <Route exact path={["/dashboard", "/trending", "/recommended", "/watchlist", "/explore"]} component={Navigation} />
            <PrivateRoute exact path="/dashboard" component={Dashboardv1} data-test={ifDev("dash-component")}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;