import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "../styles/contact.css";



export default function Register(){

    let [complaints, setComplaints] = useState([]);


    let createStudent = async (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        document.getElementById("submit_btn").innerHTML="Loading"
        document.getElementById("submit_btn").disabled = true
        document.getElementById("submit_btn").style.backgroundColor ="White"

        const formData = new FormData(event.target); // Get form data
    
        fetch("https://prince-jetro-chat-app.vercel.app/student", {
            method: "POST",
            body: formData // Use FormData directly as the body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Your Data Has Been Successfully Uploaded', data);
            // Update state or perform any other action if needed
            alert("Class Successfully Booked");
            document.getElementById("submit_btn").innerHTML="Submit"
            document.getElementById("submit_btn").disabled = false        
            document.getElementById("submit_btn").style.backgroundColor ="transparent"
        })
        .catch(error => {
            console.error('Error creating student:', error);
            if (error.message === 'Network response was not ok') {
                alert('Email already exists in the database. Please use a different email.');
                document.getElementById("submit_btn").innerHTML="Submit"
                document.getElementById("submit_btn").disabled = false        
                document.getElementById("submit_btn").style.backgroundColor ="transparent"
            } else {
                // Check if the error message contains information about the email already existing
                error.json().then(data => {
                    if (data && data.error && data.error.toLowerCase().includes('email already exists')) {
                        alert('Email already exists in the database. Please use a different email.');
                    } else {
                        alert('An unknown error occurred while creating the student');
                    }
                }).catch(() => {
                    alert('An unknown error occurred while creating the student');
                });
            }
        });    
    }
    

    return(
        <div className="contact"id="register">
            <div className="intro row">
                <h1>Register Now</h1>
            </div>

            <div className='reach_us_div row mt-5 mb-5'>
            <div className='reach_us'>
            <h1>Reach Us</h1>
            <p>Contact us for any inquiries or assistance:</p>
            <a href="mailto:adegbuyijephthah@gmail.com">adegbuyijephthah@gmail.com</a>
            </div>
            </div>

                <form onSubmit={createStudent} id="emailForm" className="row p-2">
                <div className="form_div">
                    <h4 className="text-center">BOOK YOUR</h4>
                    <h1 className="text-center">CLASS</h1>
                    <div className="row text-center">
                        <div className="col-sm-6 div1">
                            <input type="text" id="nameInput" placeholder="Full Name" name="full_name" required/>
                            <input type="tel" id="phoneInput" placeholder="Phone Number" name="phone" required/>
                            <input type="email" id="emailInput" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-sm-6 div2">
                            <textarea id="details" placeholder="How well are you familiar with Web Development?" required  name="more"></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" id="submit_btn" className="btn">SUBMIT</button>
                    </div>
                </div>   
            </form>

        </div>
    )
}
