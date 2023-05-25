import React from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    navigate("/subMain");
  };

  return (
    <Container className="login-wrap">
      <div>
        <h2>로그인</h2>
      </div>
      <Form className="login-form" onSubmit={login}>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PW" />
        <button type="submit">SIGN IN</button>
      </Form>
    </Container>
  );
};

export default Login;
