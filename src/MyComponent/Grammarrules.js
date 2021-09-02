import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grammarrules() {
    return (
        <>
            <Router>
                <div>
                    <div className="content bg-light p-3 mb-4">
                        <h2><p>TOPIC NAME</p></h2>
                        <p>Rules 1:</p>
                        <p>Rules 2:</p>
                        <p>Rules 3:</p>
                        <p>Rules 4:</p>
                    </div>
                </div>
            </Router>
        </>
    )
}
