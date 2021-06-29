import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar.js";
import FilesTable from "../Table/Table.js";
import { fetchFiles } from "../Services/filesService";
import Spinner from "react-bootstrap/Spinner";
import { Columns } from "./InboundColumn";

function InboundFiles() {
  const [spin, setSpin] = useState("false");
  const [loader, setLoader] = useState(false);
  const [rowData, setRowData] = useState([]);

  const fetchInboundFiles = async () => {
    setLoader(true);
    const fileUrl = "inboundfiles";
    const data = await fetchFiles(fileUrl);
    setRowData(data?.data);
    setLoader(false);
  };
  useEffect(() => {
    setSpin("true");
    fetchInboundFiles();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        <WrapDiv>
          Inbound<UpIcon spin={spin}></UpIcon>
        </WrapDiv>
        {loader ? (
          <Spinner className="spinner" animation="border" variant="dark" />
        ) : (
          <FilesTable
            rowData={rowData && rowData}
            columnData={Columns}
          ></FilesTable>
        )}
      </Wrapper>
    </React.Fragment>
  );
}

export default InboundFiles;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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

const UpIcon = styled(FaArrowDown)`
  font-size: 2.2rem;
  color: #4a569d;
  margin-left: 0.8rem;
  margin-top: 0.5rem;
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.spin === "true" ? "rotateZ(0deg)" : "rotateZ(-180deg)"};
`;
