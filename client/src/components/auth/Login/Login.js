import React from 'react'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

import "./styles.css"

const Login = () => {

    const history = useHistory();
    return (
        <div className="login-page">
            <div className="login-content-container">
                <div className="login-logo">
                    <h2 className="logo">Mybook</h2>
                </div>
                <h2 className="login-text">Connect with friends, family and the world around you on Mybook.</h2>
            </div>
            <div className="form">
                <form className="login-form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={() => history.push("/home")}>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
