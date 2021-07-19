import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="searchdiv">
      Search :
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="search"
      ></input>
    </div>
  );
};
