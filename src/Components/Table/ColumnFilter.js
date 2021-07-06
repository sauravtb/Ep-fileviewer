import React from "react";
import styled from "styled-components";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <ColumnDiv>
      <input
        placeholder="Search"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </ColumnDiv>
  );
};

export const DateFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  const handleReset = () => {
    setFilter("");
  };
  return (
    <DateDiv>
      <input
        type="date"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
    </DateDiv>
  );
};

// Styling For CoulmnFilter
const ColumnDiv = styled.div`
  & input {
    width: 50%;
    border-radius: 2px;
    border: none;
    background-color: #ffffff;
  }
`;

// Styling For DateFilter
export const DateDiv = styled.div`
  & input {
    width: 50%;
    border-radius: 2px;
    border: none;
    background-color: #ffffff;
  }
  & button {
    flex-direction: row;
    border-radius: 4px;
    margin-left: 0.2rem;
  }
`;
