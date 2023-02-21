import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
//

// import dependency
import {
  registerUser,
  userLogin,
} from "../../../redux/features/auth/authActions";

// impport images
import hrLine from "../../../assets/School/images/hr-line.png";
import ofLogo from "../../../assets/School/icons/offerl-logo.svg";
import googleIcon from "../../../assets/School/icons/google-icon.svg";
import facebookIcon from "../../../assets/School/icons/facebook-icon.svg";
import appleIcon from "../../../assets/School/icons/apple-icon.svg";

// import css
import "./Signup.css";
// import hooks

const Signup = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loginDetail, setLoginDetail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [errors, setErrors] = useState(null);
  const [notif, setNotif] = useState(null);

  const [isLogin, setIsLogin] = useState(location.state?.login);
  const [isSignup, setIsSignup] = useState(location.state?.signup);

  //
  const handleIsLogin = () => {
    setIsSignup(false);
    setIsLogin(true);
    setErrors(null);
    setNotif(null);
    console.log(`Signin page`);
  };

  const handleIsSignup = () => {
    setIsLogin(false);
    setIsSignup(true);
    setErrors(null);
    setNotif(null);
    console.log(`Register page`);
  };

  const { error, success, userInfo, userToken } = useSelector(
    (state) => state.auth
  );
  // console.log("userToken - " + userToken);
  // console.log("userInfo - " + userInfo);

  useEffect(() => {
    if (success) {
      setNotif("Profile created successfully!");
      window.location.reload("/Admin");
      setIsLogin(true);
      setTimeout(() => {
        setErrors(null);
        setNotif(null);
      }, 5000);
    } else if (error) {
      setErrors(error);
      setTimeout(() => {
        setErrors(null);
        setNotif(null);
      }, 5000);
      // window.location.reload("/student/signup");
    } else if (userToken) {
      const studentID = jwt(userToken).id;
      navigate(``);
    }
  }, [success, error, userInfo, userToken, navigate]);

  const registerHandler = (e) => {
    e.preventDefault();
    // please do standard and beautiful checks
    // please also do the checkbox check too, to make sure the student accept the terms and conditions
    if (
      !email ||
      !password ||
      !confirmPassword ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrors("Please fill all fields!");
    } else if (password !== confirmPassword) {
      setErrors("Passwords do not match!");
    } else {
      setEmail(email.toLowerCase());

      dispatch(registerUser({ email, password, confirmPassword }));
      console.log("details sent successfully!");
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    // please do standard and beautiful checks
    // please also do the checkbox check too, to make sure the student accept the terms and conditions
    if (!loginDetail || !password || loginDetail === "" || password === "") {
      setErrors("Please fill all fields!");
    } else {
      dispatch(userLogin({ loginDetail, password }));
      console.log("details sent successfully!");
    }
  };

  return (
    <section className="signup">
      <div className="s-img"></div>

      {/*  Content form */}
      <div className="s-content">
        <div className="s-content-wrapper">
          <div className="logo" onClick={() => navigate("/student/dashboard")}>
            <div>
              <img src={ofLogo} alt="logo" />
            </div>
            <span>OFFER LETTER</span>
          </div>

          <div className="login-signup">
            <button
              onClick={handleIsLogin}
              style={isLogin ? { color: "#fff" } : { color: "#8696AC" }}
            >
              Login
            </button>
            <button
              onClick={handleIsSignup}
              style={isSignup ? { color: "#fff" } : { color: "#8696AC" }}
            >
              Signup
            </button>
          </div>

          {/* <div className="overlay">
              <img className="image-form" src={formImage} alt="form-img" />
            </div> */}

          <div className="form-div">
            <div className={`caret ${!isLogin && "signup-caret"}`}></div>
            <div className="errors">
              {errors && <p style={{ color: "red" }}>{errors}</p>}
            </div>
            <div className="notif">
              {notif && <p style={{ color: "green" }}>{notif}</p>}
            </div>
            <form>
              {!isLogin && (
                <input
                  type="text"
                  required
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              {isLogin && (
                <input
                  type="text"
                  required
                  placeholder="Phone No/Email id"
                  name="loginDetail"
                  value={loginDetail}
                  onChange={(e) => setLoginDetail(e.target.value)}
                />
              )}



              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLogin && (
                <input
                  type="password"
                  required
                  placeholder="Retype Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}
              {/* Forgot Password */}
              {isLogin && <p>Forget Password</p>}
              {/* Agreement */}
              {!isLogin && (
                <div className="agreement">
                  <input type="checkbox" className="checkbox" required />
                  <p>
                    I agree to OFFERLETTER
                    <span>
                      <a href="blank"> User Agreement </a>
                    </span>
                    and
                    <span>
                      <a href="blank"> Privacy Policy</a>
                    </span>
                  </p>
                </div>
              )}
              {/* Signup or Login Button Starts*/}
              {!isLogin && (
                <button onClick={registerHandler} className="signin-login">
                  Signup
                </button>
              )}
              {isLogin && (
                <button onClick={loginHandler} className="signin-login">
                  Login
                </button>
              )}
              {/* Signup or Login Button Ends*/}
            </form>
            {/* Horizontal line for Or */}
            <div className="or">
              <div className="h-line">
                <img src={hrLine} alt="hr-line" />
              </div>
              <span>Or</span>
              <div className="h-line">
                <img src={hrLine} alt="hr-line" />
              </div>
            </div>

            {/* Sign In with */}
            <div className="opts-wrapper">
              <div className="sign-in-opts">
                <span>Sign up with Google</span>
                <span className="img">
                  <img src={googleIcon} alt="google-icon" />
                </span>
              </div>
              <div className="sign-in-opts">
                <span>Sign up with Facebook</span>
                <span className="img">
                  <img src={facebookIcon} alt="facebook-icon" />
                </span>
              </div>
              <div className="sign-in-opts">
                <span>Sign up with Apple</span>
                <span className="img">
                  <img src={appleIcon} alt="apple-icon" />
                </span>
              </div>
            </div>

            <div>
              {/* Switch between login and signup */}

              {!isLogin && (
                <div className="switch">
                  <span>Already have an account? </span>
                  <button onClick={handleIsLogin}>Login</button>
                </div>
              )}
              {isLogin && (
                <div className="switch">
                  <span>Don't have an account? </span>
                  <button onClick={handleIsSignup}>Signup</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
