import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [question, setQuestion] = useState("Susu, do you love Wassim?");
  const [clickedYes, setClickedYes] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);
  const [showHowMuch, setShowHowMuch] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "50%", left: "60%" });
  const [loveDegree, setLoveDegree] = useState(50); // State for slider value

  const handleYesClick = () => {
    if (!clickedNo) {
      setClickedYes(true);
      setQuestion("You should try 'No' first!");
    } else if (clickedNo) {
      setShowHowMuch(true);
      setQuestion("How much do you love him?");
    }
  };

  const handleNoClick = () => {
    setClickedNo(true);
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  const handleSliderChange = (e) => {
    setLoveDegree(e.target.value); // Update slider value dynamically
  };

  return (
    <div className="app">
      <h1>{question}</h1>
      {showHowMuch ? (
        <>
          <h2>How much do you love him? ❤</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={loveDegree}
            onChange={handleSliderChange}
            className="slider"
          />
          <p>Love Degree: {loveDegree}%</p>
        </>
      ) : (
        <>
          <button onClick={handleYesClick}>Yes</button>
          <button
            style={{ position: "absolute", top: noButtonPosition.top, left: noButtonPosition.left }}
            onClick={handleNoClick}
          >
            No
          </button>
        </>
      )}
    </div>
  );
};

export default App;




