import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <SearchDiv>
      <div className="search">
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="search"
        ></input>
        <span>
          <FcSearch />
        </span>
      </div>
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 6px;
  align-items: center;

  .search {
    display: flex;
    position: relative;
    & input {
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 0.2rem;
      position: relative;
      padding-left: 1.6rem;
      padding-bottom: 0.5rem;
    }
    & span {
      position: absolute;
      padding: 0.3rem 0 0 0.4rem;
    }
  }
`;
