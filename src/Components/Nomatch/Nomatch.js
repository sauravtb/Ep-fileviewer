import React from "react";
import BgImage from "../../assets/404.jpg";
import styled from "styled-components";

function Nomatch() {
  return <Wraper></Wraper>;
}

export default Nomatch;

const Wraper = styled.div`
  display: flex;
  background-image: url(${BgImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;
