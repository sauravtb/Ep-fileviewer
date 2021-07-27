import styled from "styled-components";

export const MainDiv = styled.span`
  width: 100%;
  max-height: 75vh;
  overflow-y: scroll;
  overflow-x: none;

  ::-webkit-scrollbar {
    width: 0.2em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  .table {
    thead {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
    th {
      text-align: left;
      background-color: #343a40;
      color: white;
    }
    tr {
      background-color: #f7f6fb;
      cursor: pointer;
    }
    tr:nth-child(even) {
      background-color: #dee4e9;
    }
  }
`;

export const PageInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  color: #3e444a;

  & button {
    border-radius: 3px;
    margin-right: 0.3rem;
  }
  & span {
    margin-right: 0.3rem;
  }
  & input {
    border-radius: 3px;
  }
`;
