import React from "react";
import {Link} from "react-router-dom";
import "../style/ForgotPassword.scss"

const ForgotPassword = () => {

    return (
        <main className='forgot_pass_container' id="forgotPassword">
            <div className="forgot_pass_form-wrapper">
                <h2 className="forgot_pass_header">Forgot your password?</h2>
                <p className="forgot_pass_subtext">Enter your details below and get back on track!</p>
                <label className="forgot_pass_field_email" htmlFor="email">Your email</label>
                <input className="forgot_pass_field_email"
                       type="email"
                       id="email" name="email"
                       placeholder="Email Address"
                />
                <button className='forgot_pass_submit' type="submit">
                    Reset Password
                </button>
                <div>
                    <Link to="/Login" className="forgot_pass-link_login"> Oh! I remember my password! </Link>
                </div>
            </div>
        </main>
    )
};

export default ForgotPassword;
