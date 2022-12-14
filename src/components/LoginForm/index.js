import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

import { Logo } from '../index'
import { login, register } from '../../actions/userActions'
import './style.css'

export const LoginForm = (props) => {
    const navigate = useNavigate();
    let [authMode, setAuthMode] = useState("signin")

    useEffect(() => {
        if (!!localStorage.getItem('token')) {
            navigate("/home")
        }
    }, [])

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const setLocalStorage = (token) => {
        const decodedToken = jwt_decode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('username', decodedToken.username);
        localStorage.setItem('user_id', decodedToken.user_id);
        navigate("/home")
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const token = await login(e.target.name1.value, e.target.password1.value);
        if (token === 401) {
            alert('Login failed. Please try again');
        } else {
            setLocalStorage(token)
        }
        e.target.reset()
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        if (e.target.password2.value === e.target.confirmpassword2.value) {
            const error = await register(e.target.name2.value, e.target.password2.value)
            if (!error) {
                const token = await login(e.target.name2.value, e.target.password2.value);
                setLocalStorage(token)
            } else {
                alert('User already exists');
            }
        } else {
            alert('Passwords do not match');
        }
        e.target.reset()
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <Logo />
                <form  role={'form'} className="Auth-form" id="loginForm" onSubmit={handleLogin}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span role={'signUpBtn'} className="link-primary" onClick={changeAuthMode}>
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
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password1">Password:</label>
                            <input
                                type="password"
                                id="password1"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <input role={'submit'} type="submit" value="Login" className="py-2" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <Logo />
            <form role={'form'} className="Auth-form" id="registerForm" onSubmit={handleRegister}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="name2">Username:</label>
                        <input
                            type="text"
                            id="name2"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password2">Password:</label>
                        <input
                            type="password"
                            id="password2"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="confirmpassword2">Confirm password:</label>
                        <input
                            type="password"
                            id="confirmpassword2"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <input type="submit" value="Register" className="py-2" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
