import React from 'react'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import { GetYear, GetDay } from '../../../function';

import "./styles.css"

const Register = () => {
    const year = GetYear().reverse();
    const day = GetDay();
    const history = useHistory();

    return (
        <div className="login-page">
            <div className="form">
                <h3 style={{ textAlign: "left" }}>Sign Up</h3>
                <form className="login-form">
                    <div className="form-group row">
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="email" placeholder="First name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="email" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Mobile number & email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="pwd" placeholder="Password" />
                    </div>
                    <p className="label">Birthday</p>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <select className="form-control" name="month">
                                <option selected value="">Month</option>
                                <option value="January">Jan</option>
                                <option value="February">Feb</option>
                                <option value="March">Mar</option>
                                <option value="April">Apr</option>
                                <option value="May">May</option>
                                <option value="June">Jun</option>
                                <option value="July">Jul</option>
                                <option value="August">Aug</option>
                                <option value="September">Sep</option>
                                <option value="October">Oct</option>
                                <option value="November">Nov</option>
                                <option value="December">Dec</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control" name="month">
                                <option selected value="">Day</option>
                                {day.map((val, key) => {
                                    return (
                                        <option value={val} key={key}>{val}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-control" name="month">
                                <option selected value="">Year</option>
                                {year.map((val, key) => {
                                    return (
                                        <option value={val} key={key}>{val}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <p className="label">Gender</p>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <span className="radio-container">
                                <label className="radio-label">Male</label>
                                <input className="radio-button" type="radio" value="Male" />
                            </span>
                        </div>
                        <div className="col-md-4">
                            <span className="radio-container">
                                <label className="radio-label">Female</label>
                                <input className="radio-button" type="radio" value="Female" />
                            </span>
                        </div>
                        <div className="col-md-4">
                            <span className="radio-container">
                                <label className="radio-label">Custom</label>
                                <input className="radio-button" type="radio" value="Custom" />
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="terms">By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time</p>
                        </div>
                    </div>
                    <button onClick={() => history.push("/home")}>Sign Up</button>
                    <p className="message">Already have an account? <Link to="/">login</Link>
                    </p>
                </form>
            </div>
        </div >
    )
}

export default Register;
