import React from "react";
import {useState, useEffect} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Others.css";

function Posture() {
  const initialState = "Enable";
  const [buttonText, setButtonText] = useState("Enable"); 

  useEffect(() => { 
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [1000])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);

  return <div className="for-spacing"><div className="posture-section section">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpHO5OXoJx8htZs-HMnv_OtjvbcORK0Tghw&usqp=CAU" alt="posture-img " className="section-img" />
    <h3>Are you an aspiring software engineer?</h3>
    <h3>You sure must be practicing coding alot.</h3>
    <h3>Longer hours spend on computer often leads to bad posture.</h3>
    <h3>StudyPat is here for you to monitor your posture</h3>
    <h3>Click on the enable button to start <strong>StudyPat Posture Detection</strong></h3>
    <Link to="/Dashboard/Webcam"><button type="button" class="btn btn-dark" onClick={() => changeText("Disable")}>{buttonText}</button></Link>
  </div></div>;
}

export default Posture;