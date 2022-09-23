import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogFilter from "./HogFilter";

function App() {

	const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name")

	const hogsToDisplay = hogs.filter((hog) =>
	(showGreased ? hog.greased : true))
  .sort((hogA, hogB) => {
    if (sortBy === "weight") {
      return hogA.weight - hogB.weight;}
      else {
        return hogA.name.localeCompare(hogB.name);
      }
  })
	

  return (
    <div className="App">
      <Nav />
      <HogFilter showGreased={showGreased} onChangeShowGreased={setShowGreased}
      sortBy={sortBy}
      onChangeSortBy={setSortBy}/>
      <HogList hogs={hogsToDisplay} />
    </div>
  );
}

export default App;
