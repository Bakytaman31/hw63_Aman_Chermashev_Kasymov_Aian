import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Blog App</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts">Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts/add">Add</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;