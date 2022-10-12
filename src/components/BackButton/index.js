import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function BackButton() {

  const nav = useNavigate()
  return (
    <div className="btn-container">
      <button className="back-btn" onClick={() => nav('/home')}>Back to home</button>
    </div>
  );
}

export default BackButton;