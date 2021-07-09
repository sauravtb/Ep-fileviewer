import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Logout } from "../../../Utils/Logout";

function Header() {
  const getName = sessionStorage.getItem("name");
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const handleLogout = () => {
    Logout(history);
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
          <Nav className="mr-auto" variant="pills">
            <Nav.Link
              className={splitLocation[1] === "inbound" ? "active" : ""}
              onClick={handleInbound}
            >
              Files Received
            </Nav.Link>
            <Nav.Link
              className={splitLocation[1] === "outbound" ? "active" : ""}
              onClick={handleOutbound}
            >
              Files Sent
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-danger" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ParentDiv>
  );
}

export default Header;

const ParentDiv = styled.div`
  .navbar-brand {
    margin-right: 3rem;
    margin-top: -0.3rem;
  }
  .nav-link {
    color: white;
    margin-right: 1.6rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
  }
  .nav-link.text-danger {
    border: 1px solid red;
    transition: all 0.2s ease;
  }
`;
