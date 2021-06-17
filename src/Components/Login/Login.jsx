import React, { useState } from "react";
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
          ></Input>
        </InputDiv>
        <InputDiv>
          <PassIcon />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            password={password}
          ></Input>
        </InputDiv>
        <ButtonDiv>LOGIN</ButtonDiv>
      </LoginDiv>
    </ParentDiv>
  );
}

export default Login;
