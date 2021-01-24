import React, { useState } from 'react';
import { useHistory } from "react-router";

import "./styles.css"
const Header = (props) => {
    const history = useHistory();

    return (
        <nav className="header navbar-fixed-top navbar-principal">
            <div className="container">
                <div className="navbar-container row" style={{ alignItems: "center" }}>
                    <div className="navbar-header logo col-md-1">
                        Mybook
                    </div>
                    <div className="col-md-4 col-sm-3">
                        <form class="navbar-form" style={{ maxWidth: 300 }}>
                            <input type="text" className="form-control" placeholder="Search.." name="search2" autocomplete="off" style={{ outline: "none" }} />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-md-7" >
                        <ul className="nav navbar-right">
                            <li className="active"><a href="home.html"><i className="fa fa-bars"></i>&nbsp;Home</a></li>
                            <li><a href="messages.html"><i className="fa fa-comments"></i></a></li>
                            <li><a href="#" className="nav-controller"><i className="fa fa-user"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >

    );
}

export default Header;