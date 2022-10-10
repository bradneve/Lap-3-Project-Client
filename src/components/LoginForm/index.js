import React, { useState } from 'react'
import { Logo } from '..'
import './style.css'

export const LoginForm = (props) => {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <Logo />
                <form className="Auth-form" id="loginForm">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="name1">Username:</label>
                            <input
                                type="text"
                                id="name1"
                                className="form-control mt-1"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password1">Password</label>
                            <input
                                type="password"
                                id="password1"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <input type="submit" value="Login" className="py-2"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <Logo />
            <form className="Auth-form" id="registerForm">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <input type="submit" value="Register" className="py-2"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
