import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import { UserLogin } from "../Services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [invalidUserError, setInvalidUserError] = useState("");
  const [disable] = useState(false);
  const inputFocus = useRef();
  const [loader, setLoader] = useState(false);
  let history = useHistory();

  function ValidateEmail() {
    const emailErrorMessage = "Invalid E-mail address";
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailformat)) {
      setEmailError("");
      Login();
    } else setEmailError(emailErrorMessage);
  }
  const Login = async () => {
    setLoader(true);
    const data = await UserLogin(email, password);
    if (data?.token) {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.user.user_name);
      sessionStorage.setItem("email", data.user.user_email);
      sessionStorage.setItem("id", data.user.user_key);
      setLoader(false);
      history.push("/inbound");
    } else {
      setLoader(false);
      setInvalidUserError("Invalid User");
    }
  };

  const handleSubmit = () => {
    ValidateEmail();
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <React.Fragment>
      <ParentDiv>
        <Jumbotron className="jumbo">
          <p>LOGIN</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={inputFocus}
                onKeyPress={handleKeypress}
              ></Form.Control>
              <Form.Text className="text-danger">{emailError}</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeypress}
              />
              <Form.Text className="text-danger">{invalidUserError}</Form.Text>
            </Form.Group>
          </Form>

          {loader ? (
            <Spinner className="spinner" animation="border" variant="dark" />
          ) : (
            <Button
              className="btns"
              block
              onClick={handleSubmit}
              disabled={!email || !password || disable}
            >
              LOGIN
            </Button>
          )}
        </Jumbotron>
      </ParentDiv>
    </React.Fragment>
  );
}

export default Login;

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .jumbo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spinner {
    font-size: 1rem;
  }
`;
