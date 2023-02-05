import React from "react";
import {useState, useEffect} from "react";
import "./Others.css";

function Autocorrect() {
  const initialState = "Enable";
  const [buttonText, setButtonText] = useState("Enable"); 

  useEffect(() => { 
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [1000])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);

  return <div className="for-spacing last"><div className="autocorrect-section section">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfwGXe-R8u3ZMU_YfcnDPUNbWZTWYTSb5Zw&usqp=CAU" alt="autocorrect-img " className="lastthree-img" />
    <h3>Have an assignment to complete?</h3>
    <h3>Use StudyPat for useful suggestion and grammer check.</h3>
    <h3>Click on the enable button to start <strong>StudyPat Autocorrect</strong></h3>
    <button type="button" class="btn btn-dark" onClick={() => changeText("Disable")}>{buttonText}</button>
  </div></div>;
}

export default Autocorrect;   


