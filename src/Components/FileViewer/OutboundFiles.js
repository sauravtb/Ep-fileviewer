import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar.js";
import FilesTable from "../Table/Table.js";

function OutboundFiles() {
  const [spin, setSpin] = useState("false");

  useEffect(() => {
    setSpin("true");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        <WrapDiv>
          Outbound<DownIcon spin={spin}></DownIcon>
        </WrapDiv>
        <FilesTable />
      </Wrapper>
    </React.Fragment>
  );
}

export default OutboundFiles;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  align-items: center;
  justify-content: center;
`;
const WrapDiv = styled.div`
  display: flex;
  font-size: 3rem;
  color: #343a40;
  flex-direction: row;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 3rem;
`;

const DownIcon = styled(FaArrowDown)`
  font-size: 2.2rem;
  color: red;
  margin-left: 0.8rem;
  margin-top: 0.5rem;
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.spin === "true" ? "rotateZ(-180deg)" : "rotateZ(0deg)"};
`;
