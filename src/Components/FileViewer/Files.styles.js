import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;

  table {
    margin-top: 2.4rem;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 1.5rem;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const WrapDiv = styled.div`
  display: flex;
  font-size: 4rem;
  flex-direction: row;
  align-items: center;
  margin-left: 1.5rem;
`;
export const UpIcon = styled(FaArrowDown)`
  font-size: 3rem;
  color: #4a569d;
  margin-left: 0.8rem;
  margin-top: 0.5rem;
  transition: all 0.8s ease;
  transform: ${(props) => (props.spin ? "rotateZ(0deg)" : "rotateZ(-180deg)")};
`;

export const DownIcon = styled(FaArrowDown)`
  font-size: 3rem;
  color: #923d61;
  margin-left: 0.8rem;
  margin-top: 0.5rem;
  transition: all 0.8s ease;
  transform: ${(props) => (props.spin ? "rotateZ(-180deg)" : "rotateZ(0deg)")};
`;
