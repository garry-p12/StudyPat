import React from "react";
import {useState, useEffect} from "react";
import "./Others.css";


function Drowsy() {
  const initialState = "Enable";
  const [buttonText, setButtonText] = useState("Enable"); 

  useEffect(() => { 
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [1000])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);

  return <div className="for-spacing"><div className="drowsy-section section">
    <img src="https://static.vecteezy.com/system/resources/previews/004/717/204/original/girl-sleepy-cartoon-clipart-cute-kawaii-free-vector.jpg" alt="drowsy-img " className="lastthree-img" />
    <h3>Are chemical equations dozing you off?</h3>
    <h3>Inattention leads to inefficient learning.</h3>
    <h3>Click on the enable button to start <strong>StudyPat Drowsiness Detection</strong></h3>
    <button type="button" class="btn btn-dark" onClick={() => changeText("Disable")}>{buttonText}</button>
  </div></div>;
}

export default Drowsy;   
