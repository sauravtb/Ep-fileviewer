import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
      <WrapDiv>
        <input
          type="date"
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button size="sm" onClick={handleReset}>
          Reset
        </Button>
      </WrapDiv>
    </DateDiv>
  );
};

// Styling For CoulmnFilter
const ColumnDiv = styled.div`
  & input {
    margin-top: 0.3rem;
    width: 50%;
    border-radius: 2px;
    border: none;
    background-color: #ffffff;
  }
`;

// Styling For DateFilter
export const DateDiv = styled.div`
  & input {
    margin-top: 0.3rem;
    width: 50%;
    border-radius: 2px;
    border: none;
    background-color: #ffffff;
  }
  & button {
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }
`;
const WrapDiv = styled.div`
  display: flex;
  align-items: center;
`;
