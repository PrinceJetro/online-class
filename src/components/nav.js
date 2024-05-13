import React, { useEffect, useState } from 'react';
import { ReactDOM } from "react";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">PrinceJetro Web Training</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutcourse">About The Course</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#register" tabIndex="-1" aria-disabled="true">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>    )
} 
