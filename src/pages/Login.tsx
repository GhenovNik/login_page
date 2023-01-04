import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  const emailHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("Password must be between 8 and 16 characters");
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };
  const blurHandler = (e: {
    target: { name: React.SetStateAction<string> };
  }) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  const handleSubmit = () => {
    navigate("/SubmitPage");
  };

  return (
    <main className="login_container" id="login">
      <div className="login_form-wrapper">
        <h2 className="login_header">Welcome back!</h2>
        <p className="login_subtext">Sign in and get to it.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
          <label htmlFor="password">Password</label>
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            value={password}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
          <div>
            <Link to="/ForgotPass" className="login-link_forgot_pass">
              Forgot your password?
            </Link>
          </div>
          <button
            className="login-button_submit"
            type="submit"
            disabled={!formValid}
          >
            Sign In
          </button>
        </form>
        <Link to="/SignUp" className="login-link_signup">
          Don't have an account? Create one now!{" "}
        </Link>
      </div>
    </main>
  );
};

export default Login;
