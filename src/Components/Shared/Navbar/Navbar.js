import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
    <ParentDiv>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Hello Saurav</Navbar.Brand>
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
