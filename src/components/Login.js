import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  const login = () => {
    console.warn({ name, password, key });

    fetch("http://localhost:3000/login?q=" + name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0 && key !== "") {
          localStorage.setItem("login", JSON.stringify(resp));
          navigate("/");
        } else {
          alert("Please check username and password");
        }
      });
    });
  };

  return (
    <Container>
      <div className="main-div">
        <div className="main-heading">Login</div>
        <Form>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formName">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setKey(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <br />

          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
