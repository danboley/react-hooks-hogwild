import React from "react";

function HogFilter({
  showGreased,
  onChangeShowGreased,
  sortBy,
  onChangeSortBy,
}) {
  function handleGreaseToggle(e) {
    onChangeShowGreased(e.target.checked);
  }

  function handleSortBy(e) {
    onChangeSortBy(e.target.value);
  }

  return (
    <div className="HogFilters">
      <div className="GreaseFilter">
        <label>Greased Pigs Only: </label>
        <input
          type="checkbox"
          checked={showGreased}
          onChange={handleGreaseToggle}
        ></input>
      </div>
      <div className="WeightFilter">
        <select name="sort" onChange={handleSortBy} value={sortBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default HogFilter;
