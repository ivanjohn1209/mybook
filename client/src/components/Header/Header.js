import React, { useState } from 'react';
import { useHistory } from "react-router";

import "./styles.css"
const Header = (props) => {
    const history = useHistory();

    return (
        <nav className="header navbar-fixed-top navbar-principal">
            <div className="container">
                <div className="navbar-header logo">
                    Mybook
            </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <div className="col-md-5 col-sm-3">
                        <form className="navbar-form">
                            <div className="form-group" style={{ display: "inline" }}>
                                <div className="input-group" style={{ display: "table" }}>
                                    <input className="form-control" name="search" placeholder="Search..." autocomplete="off" type="text" />
                                    <span className="input-group-addon" style={{ width: "1%" }}>
                                        <span className="glyphicon glyphicon-search"></span>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="profile.html">
                                Katya
                          <img src="img/Friends/woman-4.jpg" className="img-nav" />
                            </a>
                        </li>
                        <li className="active"><a href="home.html"><i className="fa fa-bars"></i>&nbsp;Home</a></li>
                        <li><a href="messages.html"><i className="fa fa-comments"></i></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">	Pages
                          <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="photos.html">Photos</a></li>
                                <li><a href="view_photo.html">View photo</a></li>
                                <li><a href="friends.html">Friends</a></li>
                                <li><a href="user_detail.html">User detail</a></li>
                                <li><a href="list_users.html">List users</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="nav-controller"><i className="fa fa-user"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav >

    );
}

export default Header;