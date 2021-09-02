import React from 'react'
import {
    Link
} from "react-router-dom";

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Downloadlesson() {
    return (
        <>
            <div>
                <div className="content bg-light p-3 mb-4">
                    <p>Date:<Link to="#">Downloadlesson</Link></p>
                </div>
            </div>

        </>
    )
}
