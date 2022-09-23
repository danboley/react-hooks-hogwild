import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  return (
    <div className="HogList">
      {hogs.map((hog) => (
        <HogCard key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
