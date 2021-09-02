import React from 'react'
import {
   Link
} from "react-router-dom";

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onlinetools() {
    return (
        <>
            <div>
                <div className="content bg-light p-3 mb-4">
                    <h2><p>ONLINE TOOLS</p></h2>
                    <p><Link to="#">Grammar Checker</Link></p>
                    <p><Link to="#">Word Count</Link></p>
                </div>
            </div>
        </>
    )
}