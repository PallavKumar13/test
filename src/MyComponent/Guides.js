import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Guides() {
    return (
        <>
            <Router>
                <div>
                    <div className="content bg-light p-3 mb-4">
                        <h2><p>This is Guide Page</p></h2>
                    </div>
                </div>
            </Router>
        </>
    )
}