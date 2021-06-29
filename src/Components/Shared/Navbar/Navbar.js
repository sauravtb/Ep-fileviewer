import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  const getName = sessionStorage.getItem("name");
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
  };
  const handleInbound = () => {
    history.push("/inbound");
  };
  const handleOutbound = () => {
    history.push("./outbound");
  };
  return (
    <ParentDiv>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Hello {getName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={handleInbound}>Inbound</Nav.Link>
            <Nav.Link onClick={handleOutbound}>Outbound</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ParentDiv>
  );
}

export default Header;

const ParentDiv = styled.div`
  .navbar-brand {
    font-size: 1.6rem;
    margin-right: 3rem;
    margin-top: -0.3rem;
  }
  .nav-link {
    font-size: 1.4rem;
    margin-right: 1.6rem;
  }
`;
