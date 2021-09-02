import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuestionTemplate() {
    return (
        <div>
            <div className="content bg-light px-5 py-3 mb-4 ">
                <div className="content-div mb-5">
                    <h3>Question <span>1</span>of 14</h3>
                    <br />
                    <h3><b>Question No:<span>1</span></b></h3>
                    <br />
                    <div className="border border-secondary border-1 p-3 ">
                        <p><b>Which of these is not a word or phrase?</b></p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" for="exampleRadios1">
                                a lot
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" for="exampleRadios1">
                                alot
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" for="exampleRadios1">
                                allot
                            </label>
                        </div>
                    </div>
                    <br />
                    <Link to="/QuestionTemplate">
                        <div className="content-button m-4">
                            <button type="button" className="quiz-start btn btn-outline-success btn-lg">Next Question</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
