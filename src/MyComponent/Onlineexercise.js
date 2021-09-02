import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onlineexercise() {
    return (
        <>
            <Router>
                <div>
                    <div className="content bg-light p-3 mb-4">
                        <h2><p>EXERCISE___</p></h2>
                        <p>Exercise 1:</p>
                        <p>Exercise 2:</p>
                        <p>Exercise 3:</p>
                        <p>Exercise 4:</p>
                    </div>
                </div>
            </Router>
        </>
    )
}