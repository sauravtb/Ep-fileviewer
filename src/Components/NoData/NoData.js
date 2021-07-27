import React from "react";
import styled from "styled-components";

const NoData = () => {
  return (
    <NoDataDiv>
      <h1>Hello {sessionStorage.getItem("name")}</h1>
      <h3>No Records Found</h3>
    </NoDataDiv>
  );
};

export default NoData;

const NoDataDiv = styled.div`
  display: flex;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
