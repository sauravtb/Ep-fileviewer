import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ParentDiv,
  LoginDiv,
  ButtonDiv,
  Input,
  InputDiv,
  MailIcon,
  PassIcon,
} from "./Login.styles.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disable, setDisable] = useState(false);
  const inputFocus = useRef();
  let history = useHistory();

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  function ValidateEmailAndPassword() {
    const emailErrorMessage = "*invalid email address!";
    const passwordErrorMessage =
      "*min len 14, an alpha numeric with a  special character.";
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

  return (
    <ParentDiv>
      <LoginDiv>
        <p>LOGIN</p>
        <InputDiv>
          <MailIcon />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ref={inputFocus}
          ></Input>
          {<span>{emailError}</span>}
        </InputDiv>
        <InputDiv>
          <PassIcon />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            password={password}
          ></Input>
          {<span>{passwordError}</span>}
        </InputDiv>
        <ButtonDiv
          onClick={handleSubmit}
          disabled={!email || !password || disable}
        >
          LOGIN
        </ButtonDiv>
      </LoginDiv>
    </ParentDiv>
  );
}

export default Login;
