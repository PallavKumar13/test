import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuizstartTemplate() {
    return (
        <div>
            <div className="content bg-light p-3 mb-4">
                <div className="content-div mb-5">
                    <h2><b>Quiz</b></h2>
                    <hr />
                    <br />
                    <h3>Can you correct these 14 basic grammar mistakes?</h3>
                    <br />
                    <p><b>Here’s the grammar quiz experts claim only those with an above average IQ can ace.</b></p>

                    <p><b>Just kidding; these are basic grammar mistakes that almost everyone misses.</b></p>

                    <p><b>Let’s see how well you do!</b></p>
                </div>
                <br />
                <Link to="/QuestionTemplate">
                    <div className="content-button m-4 d-grid">
                        <button type="button" class="quiz-start btn btn-outline-success btn-lg">Start Quiz</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}
