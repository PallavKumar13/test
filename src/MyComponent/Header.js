import React from 'react'
import { Link } from "react-router-dom";
import './header.css';
import logo from './Image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <>
            {/* logo and search bar */}
            <nav className="topnavbar navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/Main">
                        <img src={logo} alt="" />
                    </Link>
                    <form className="d-flex">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {/* navbar  */}
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Downloadlesson">DOWNLOAD LESSONS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Grammarrules">GRAMMAR RULES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Onlineexercise">ONLINE EXERCISES</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/Onlinetools" id="navbarDropdown"
                                        aria-expanded="false">
                                        ONLINE TOOLS
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#">GRAMMAR CHECKER</Link></li>
                                        <li><Link className="dropdown-item" to="#">WORD COUNTER</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Videos">VIDEOS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Guides">GUIDES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
