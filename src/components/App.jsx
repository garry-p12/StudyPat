import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

var userIsRegistered = true;

userIsRegistered = prompt("Already registered? Type in  'true' ", "");

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route className="container" path="/" element={<Navbar isRegistered={userIsRegistered} />} />
        <Route path="Dashboard" element={<Dashboard />} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;   
