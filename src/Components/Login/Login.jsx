import React, { useState, useRef, useEffect } from "react";
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
  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputFocus = useRef();
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
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
          {submitted && !email && <span>Please Enter a vaild mail</span>}
        </InputDiv>
        <InputDiv>
          <PassIcon />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            password={password}
          ></Input>
          {submitted && !password && <span>Please Enter a vaild password</span>}
        </InputDiv>
        <ButtonDiv onClick={handleSubmit}>LOGIN</ButtonDiv>
      </LoginDiv>
    </ParentDiv>
  );
}

export default Login;
