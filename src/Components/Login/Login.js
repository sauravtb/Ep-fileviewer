import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disable, setDisable] = useState(false);
  const inputFocus = useRef();
  let history = useHistory();

  function ValidateEmailAndPassword() {
    const emailErrorMessage = "invalid email address.";
    const passwordErrorMessage =
      "min len 14, an alpha numeric with a  special character.";
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const passwordformat =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{13,25}$/;

    if (email.match(mailformat) && password.match(passwordformat)) {
      setEmailError("");
      setPasswordError("");
      let user = {
        email,
        password,
      };
      history.push("/inbound");
      // setTimeout(() => {
      //   setDisable(false);
      // }, 2000);
      // setDisable(true);
      console.log(user);
    } else {
      if (!email.match(mailformat) && !password.match(passwordformat)) {
        setEmailError(emailErrorMessage);
        setPasswordError(passwordErrorMessage);
      } else if (!password.match(passwordformat)) {
        setPasswordError(passwordErrorMessage);
        setEmailError("");
      } else if (!email.match(mailformat)) {
        setEmailError(emailErrorMessage);
        setPasswordError("");
      }
    }
  }

  const handleSubmit = () => {
    ValidateEmailAndPassword();
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
              size="lg"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={inputFocus}
            ></Form.Control>
            <Form.Text>{emailError}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text>{passwordError}</Form.Text>
          </Form.Group>
        </Form>
        <Button
          className="btns"
          size="lg"
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
  background: linear-gradient(15deg, #dc2424 -40%, #4a569d 100%);
  height: 100vh;

  .jumbotron {
    margin-right: 24px;
    margin-left: 24px;
    width: 500px;
    text-align: center;
    background-color: #ffffff;
    & p {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2.5rem;
    }
    .btn {
      background: linear-gradient(15deg, #dc2424 -40%, #4a569d 50%);
      font-size: 1.6rem;
      margin-top: 5rem;
    }
    .form-text {
      color: red;
      text-align: left;
      margin: 6px 36px 0 2px;
      font-size: 1rem;
      position: absolute;
    }
    .form-group {
      margin-bottom: 3rem;
    }
    .form-control {
      background-color: #e6e6e6;
      height: 60px;
      border-radius: 5px;
      border: none;
      outline: none;
      :focus {
        box-shadow: 2px 5px #4c569c;
      }
    }
  }
`;
