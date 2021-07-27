import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar.js";
import FilesTable from "../Table/Table.js";
import { fetchFiles } from "../Services/filesService";
import Spinner from "react-bootstrap/Spinner";
import { Columns } from "./InboundColumn";
import { Logout } from "../../Utils/Logout";
import NoData from "../NoData/NoData.js";

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

  const usName = rowData && rowData[0]?.us_name.replace(/_/g, " ");

  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        {loader ? (
          <Spinner className="spinner" animation="border" variant="dark" />
        ) : rowData && rowData.length === 0 ? (
          <NoData />
        ) : (
          <React.Fragment>
            <WrapDiv>
              Recieved by {usName}
              <UpIcon spin={spin}></UpIcon>
            </WrapDiv>

            <FilesTable
              rowData={rowData && rowData}
              columnData={Columns}
            ></FilesTable>
          </React.Fragment>
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
  padding-bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #f6f8fc;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const WrapDiv = styled.div`
  display: flex;
  color: #343a40;
  flex-direction: row;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  z-index: 1;
`;

const UpIcon = styled(FaArrowDown)`
  color: #4a569d;
  margin-left: 0.8rem;
  margin-top: 0.25rem;
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.spin === "true" ? "rotateZ(0deg)" : "rotateZ(-180deg)"};
`;
