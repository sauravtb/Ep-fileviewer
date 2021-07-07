import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar.js";
import FilesTable from "../Table/Table.js";
import { fetchFiles } from "../Services/filesService";
import Spinner from "react-bootstrap/Spinner";
import { Columns } from "./InboundColumn";
import { Logout } from "../Utils/Logout";

function InboundFiles() {
  const history = useHistory();
  const [spin, setSpin] = useState("false");
  const [loader, setLoader] = useState(false);
  const [rowData, setRowData] = useState([]);

  const fetchInboundFiles = useCallback(async () => {
    setLoader(true);
    const fileUrl = "inboundfiles";
    const data = await fetchFiles(fileUrl);
    if (data && data === 401) {
      Logout(history);
    } else {
      setRowData(data && data.data);
    }
    setLoader(false);
  }, [history]);
  useEffect(() => {
    setSpin("true");
    fetchInboundFiles();
  }, [fetchInboundFiles]);
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
  font-size: 1.5rem;
  color: #343a40;
  flex-direction: row;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const UpIcon = styled(FaArrowDown)`
  font-size: 1.1rem;
  color: #4a569d;
  margin-left: 0.8rem;
  margin-top: 0.1rem;
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.spin === "true" ? "rotateZ(0deg)" : "rotateZ(-180deg)"};
`;
