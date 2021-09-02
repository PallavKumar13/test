import React from 'react'
import { Link } from "react-router-dom";
import './rightcomp.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RightComp() {
    return (
        <>
            <div>
                <div className="table-div position-relative d-grid">
                    <Link to="#" className="btn btn-outline-secondary">
                        <ul className="social-facebook d-flex">
                            <li><i className="bi bi-facebook"></i></li>
                            <li className="count position-absolute end-0 px-4">4567</li>
                        </ul>
                    </Link>
                    <Link to="#" className="btn btn-outline-secondary">
                        <ul className="social-twitter d-flex ">
                            <li><i className="bi bi-twitter"></i></li>
                            <li className="count position-absolute end-0 px-4">456447</li>
                        </ul>
                    </Link>
                </div>
                <div>
                    <form className="pdf my-4 py-4 px-2 bg-white w-100">
                        <div className="form-group">
                            <label for="formGroupExampleInput"><p><u>Download Grammar Guide:</u></p>
                                <strong>
                                    <p>120 Grammar and Vocabulary</p>
                                    <p>Mistakes to Avoid</p>
                                    <p>+ Important 2021 Grammar Updates</p>
                                </strong>
                            </label>
                            <input type="text" className="form-control my-2" id="formGroupExampleInput" placeholder="E-mail Id" />
                            <button type="button" className="btn btn-outline-success w-100 my-2 mb-3"><i className="bi bi-file-earmark-pdf">Download PDF</i></button>
                            <div className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
                            <p><small>No worries. We keep your email address safe.</small></p>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="list-group text-center my-4 w-100 rounded-0 bg-light">
                        <span className="list-group-item list-group-item-title list-group-item-action bg-dark text-light fw-bold">CHECK YOUR GRAMMAR</span>
                        <Link to="#">
                            <h1><i class="bi bi-spellcheck bi-lg"></i></h1></Link>
                        <p><small>Tip: Bookmark it now. (You might need it later.)</small></p>
                    </div>
                </div>
                <div className="list-group my-2 W-100 rounded-0">
                    <span className="list-group-item list-group-item-title list-group-item-action bg-dark text-light fw-bold text-center">LATEST EXERCISES</span>
                    <p><small>
                        <Link to="#" className="list-group-item list-group-item-action">Gap Filling Exercise August 18, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Sentence Completion Exercise August 17, 2021</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Passive Voice Exercise August 15, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Pronouns Exercise August 13, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Tenses Exercise August 13, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Articles And Determiners Exercise August 10, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">General Grammar Exercise August 10, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Sentence Completion Exercise August 8, 2021 </Link>
                        <Link to="#" className="list-group-item list-group-item-action">Tenses Exercise August 5, 2021 </Link>
                    </small></p>
                </div>
            </div>
        </>
    )
}
