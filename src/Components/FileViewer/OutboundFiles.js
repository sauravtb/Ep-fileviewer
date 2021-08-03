import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar.js";
import FilesTable from "../Table/Table.js";
import { fetchFiles } from "../Services/filesService";
import Spinner from "react-bootstrap/Spinner";
import { Columns } from "./OutboundColumn";
import { Logout } from "../../Utils/Logout";

function OutboundFiles() {
  const history = useHistory();
  const [spin, setSpin] = useState("false");
  const [loader, setLoader] = useState(false);
  const [rowData, setRowData] = useState([]);

  const fetchOutboundFiles = useCallback(async () => {
    setLoader(true);
    const fileUrl = "outboundfiles";
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
    fetchOutboundFiles();
  }, [fetchOutboundFiles]);
  const usName = rowData && rowData[0]?.us_name.replace(/_/g, " ");

  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        {loader ? (
          <Spinner className="spinner" animation="border" variant="dark" />
        ) : (
          <React.Fragment>
            <WrapDiv>
              {rowData && rowData.length !== 0 ? (
                <React.Fragment>
                  Sent from {usName}
                  <DownIcon spin={spin}></DownIcon>
                </React.Fragment>
              ) : null}
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

export default OutboundFiles;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;
const WrapDiv = styled.div`
  display: flex;
  color: #343a40;
  flex-direction: row;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 0rem;
`;

const DownIcon = styled(FaArrowDown)`
  color: red;
  margin-left: 0.8rem;
  margin-top: 0.15rem;
  transition: all 0.8s ease;
  transform: ${(props) =>
    props.spin === "true" ? "rotateZ(-180deg)" : "rotateZ(0deg)"};
`;
