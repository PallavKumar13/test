import React from 'react'
import { Link } from "react-router-dom";
import './leftcomp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LeftComp() {
    return (

        <>
            <div className="list">
                <div className="list-group text-center ">
                    <span className="list-group-item list-group-item-title list-group-item-action text-light fw-bold ">TOPICS</span>
                    <Link to="#" className="list-group-item list-group-item-action">Adjectives</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Adverbs</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Business Writing</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Commas</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Creative Writing</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Difference</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Essay Writing</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Exercises</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Learning</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Lessons</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Nouns</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Prepositions</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Pronouns</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Proofreading</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Punctuation</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Quiz</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Spelling</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Style Guide</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Teaching</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Verbs</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Words</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Writing</Link>
                </div>
                <div className="list-group text-center my-4 ">
                    <span className="list-group-item list-group-item-title list-group-item-action bg-dark text-light fw-bold">QUIZ</span>
                    <Link to="/QuizstartTemplate" className="list-group-item list-group-item-action">Can you correct these 14 basic grammar mistakes?</Link>
                    <Link to="#" className="list-group-item list-group-item-action">What kind of writer are you?</Link>
                </div>
            </div>

        </>
    )
}
