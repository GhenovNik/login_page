import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../style/SignUp.scss"

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [passwordError, setPasswordError] = useState('Password cannot be empty');
    const [confirmPasswordError, setConfirmPasswordError] = useState('Password cannot be empty');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (emailError || passwordError || confirmPasswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, confirmPasswordError]);

    const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is not valid');
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 16) {
            setPasswordError('Password must be between 8 and 16 characters');
            if (!e.target.value) {
                setPasswordError('Password cannot be empty');
            }
        } else {
            setPasswordError('');
        }
    }

    const confirmPasswordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError('Passwords do not match');
            if (!e.target.value) {
                setConfirmPasswordError('Password cannot be empty');
            }
        } else {
            setConfirmPasswordError('');
        }
    }


    return (
        <main className='signup-container' id="signup">

            <div className='signup-page_form-wrapper'>
                <h2 className='signup_header'>Welcome to RPC!</h2>
                <p className='signup_subtext'>Create your account and start saving time today!</p>
                <form className="signup-form">
                    <label htmlFor="Full Name">Full Name</label>
                    <input
                        type="fullName"
                        id="fullName" name="fullName"
                        placeholder="Full Name"
                    />
                    <label htmlFor="email">Email</label>
                    {emailError && <div style={{color: 'red'}}>{emailError}</div>}
                    <input value={email}
                           type="email"
                           id="email" name="email"
                           placeholder="Email"
                           onChange={(e) => emailHandler(e)}

                    />
                    <label htmlFor="password">Password</label>
                    {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input value={password}
                           type="password"
                           id="password" name="password"
                           placeholder="Password"
                           onChange={(e) => passwordHandler(e)}

                    />
                    <label htmlFor="password">Confirm password</label>
                    {confirmPasswordError && <div style={{color: 'red'}}>{confirmPasswordError}</div>}
                    <input value={confirmPassword}
                           type="password"
                           id="password" name="password"
                           placeholder="Confirm password"
                           onChange={(e) => confirmPasswordHandler(e)}

                    />
                    <button className="signup-button_submit" type="submit" disabled={!formValid}>Sign Up</button>
                    <Link to="/Login" className="link-signup">Already have an account? Sign in.</Link>
                </form>
            </div>
        </main>
    )
}

export default SignUp;