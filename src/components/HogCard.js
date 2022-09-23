import React, { useState } from "react";
import HogInfo from "./HogInfo";

function Hog({ hog }) {
  const [showHogInfo, setShowHogInfo] = useState(false);

  function handleHogClick() {
    setShowHogInfo((prevHogInfo) => !prevHogInfo);
  }

  return (
    <div className="HogCard">
      <h1>{hog.name}</h1>
      <img src={hog.image} alt="Hog"></img>
      <div>
        {showHogInfo ? <HogInfo hog={hog} /> : null}
        <button onClick={handleHogClick}>
          {showHogInfo ? "Less Info" : "More Info"}
        </button>
      </div>
    </div>
  );
}

export default Hog;
