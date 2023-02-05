import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autocorrect from "./Autocorrect";
import Drowsy from "./Drowsy";
import Posture from "./Posture";
import Profile from "./Profile";
import TextToSpeech from "./TextToSpeech";
import "./Dashboard.css";

function Dashboard(){
    return(
        <div >
            <div className="for-spacing">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand studypat" href="">studypat</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to='#profile'>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='#posture'>Posture</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='#drowsy'>Drowsy</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tos">Text to Speech</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='#auto'>Autocorrect</Link>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
            <Profile />
            <Posture id='#posture'/>
            <Drowsy id='#drowsy'/>
            <TextToSpeech id="#tos"/>
            <Autocorrect id='#auto'/>
        </div>
    );

}

export default Dashboard;