import React from "react";

function HogInfo({ hog }) {

  return (
    <div className="HogInfo">
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Grease Status: {hog.greased ? "Greased" : "Not Greased"}</p>
      <p>Highest Medal Achievement: {hog["highest medal achieved"]}</p>
    </div>
  );
}

export default HogInfo;
