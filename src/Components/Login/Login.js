import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disable] = useState(false);
  const inputFocus = useRef();
  let history = useHistory();

  function ValidateEmail() {
    const emailErrorMessage = "Invalid E-mail address";
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailformat)) {
      setEmailError("");
      userLogin();
    } else setEmailError(emailErrorMessage);
  }
  const userLogin = async () => {
    let userDetails = { email, password };
    console.log(JSON.stringify(userDetails));
    let result = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": " ",
        Host: " ",
      },

      body: JSON.stringify(userDetails),
    });
    result = await result.json();
    if (result.takoen) history.push("/inbound");
    console.log(result);
  };

  const handleSubmit = () => {
    ValidateEmail();
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <ParentDiv>
      <Jumbotron>
        <p>LOGIN</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={inputFocus}
            ></Form.Control>
            <Form.Text className="text-danger">{emailError}</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button
          className="btns"
          block
          onClick={handleSubmit}
          disabled={!email || !password || disable}
        >
          LOGIN
        </Button>
      </Jumbotron>
    </ParentDiv>
  );
}

export default LoginNew;

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
