import React from 'react'
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <>
            <div>
                <div className="content bg-light p-3 mb-4 ">
                    <h1>CONTACT US:</h1>
                    <hr />
                    <br />
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Comment:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3 ">
                        <button class="submit btn btn-outline-primary" value="submit" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}