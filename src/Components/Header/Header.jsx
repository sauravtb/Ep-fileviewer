import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderDiv, LeftDiv, RightDiv, Container } from "./Header.styles.jsx";

function Header() {
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
  };
  const handleInbound = () => {
    history.push("/inbound");
  };
  const handleOutbound = () => {
    history.push("./outbound");
  };
  return (
    <HeaderDiv>
      <LeftDiv>Welcome Saurav</LeftDiv>
      <RightDiv>
        <Container onClick={handleInbound}>Inbound</Container>
        <Container onClick={handleOutbound}>Outbound</Container>
        <Container onClick={handleLogout} logout>
          Logout
        </Container>
      </RightDiv>
    </HeaderDiv>
  );
}

export default Header;
