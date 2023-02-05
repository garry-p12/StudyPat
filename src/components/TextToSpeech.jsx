import React from "react";
import {useState, useEffect} from "react";
import "./Others.css";

function TextToSpeech() {
  const initialState = "Enable";
  const [buttonText, setButtonText] = useState("Enable"); 

  useEffect(() => { 
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [1000])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);

  return <div className="for-spacing"><div className="texttospeech-section section">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvKKmXEPVptF-VSQInNre-pv5DM6qmLkjug&usqp=CAU" alt="textToSpeech-img " className="lastthree-img" />
    <h3>Less time, More to study?</h3>
    <h3>StudyPat can convert text to speech.</h3>
    <h3>Click on the enable button to start <strong>StudyPat Text to Speech</strong></h3>
    <button type="button" class="btn btn-dark" onClick={() => changeText("Disable")}>{buttonText}</button>
  </div></div>;
}

export default TextToSpeech;   
