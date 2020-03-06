import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import "./login.scss";
import Groa2 from "../auth/Groa-logo-B2AA.png";
import { ifDev } from "../../utils/removeAttribute.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        user_name: "",
        password: ""
      },
      errors: {
        user_name: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    e.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
    switch (name) {
      case "user_name":
        errors.user_name = value.length < 5 ? "must be a valid user name" : "";
        break;
      case "password":
        errors.password =
          value.length < 4
            ? "Password must be more than 4 characters long"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {});
  };

  loginUser = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", this.state.user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        //redirect to Groas dashboard page
        if (this.state.user.user_name && this.state.user.password) {
          this.props.history.push("/dashboard", {userid: res.data.id});
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="LoginPage" data-test={ifDev("login")}>
        {/* Container - ENTIRE PAGE */}
        <div className="containerLogin">
          <div className="bartop">
                
          </div>

          <div className="Middle">
            <div className="boxLeft">
              <img className="Logo2" src={Groa2} alt="GroaLogo" />
            </div>
            {/* END BOX LEFT */}
            <div className="boxRight">
              <form className="LoginForm" onSubmit={this.loginUser}>
                <h1 className="textlogin">Log in</h1>

                <div
                  className={
                    "a" +
                    (this.submitted && !this.user.user_name ? "error" : "")
                  }
                />
                <input
                  className="input1"
                  type="text"
                  name="user_name"
                  value={this.user_name}
                  onChange={this.handleChange}
                  placeholder="Username or email required"
                  errorMessage="username required"
                />
                {/* ERROR MESSAGE */}
                {errors.user_name.length > 0 && (
                  <span className="error">{errors.user_name}</span>
                )}

                <input
                  className="input1"
                  type="password"
                  name="password"
                  value={this.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />

                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}

                <div className="TextandCheck">
                  <div className="CheckBoxContainer">
                    <input className="Checkbox" type="checkbox" />
                  </div>
                  <h5> Remember me</h5>
                  <div className="TextandCheck2">
                    <h5>Forgot password?</h5>
                  </div>
                </div>

                <div className="BtnContainer">
                  <button className="BtnLogin" data-test={ifDev("BtnLoginTest")}>Log in</button>
                </div>
              </form>
            </div>
            {/* END BOX RIGHT */}
          </div>
          {/* END MIDDLE */}
        </div>
        {/* END CONTAINER */}
      </div>
      // END LOGIN PAGE
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { loginAction })(LoginPage);