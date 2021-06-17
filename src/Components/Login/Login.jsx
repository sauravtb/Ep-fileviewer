import React, { useState } from "react";
import { ParentDiv, LoginDiv, ButtonDiv } from "./Login.styles.js";

function Login() {
  const [email, setEmail] = useState("Saurav");
  const [password, setPassword] = useState("");

  return (
    <ParentDiv>
      <LoginDiv>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          password={password}
        ></input>
        <ButtonDiv>Login</ButtonDiv>
      </LoginDiv>
    </ParentDiv>
  );
}

export default Login;
