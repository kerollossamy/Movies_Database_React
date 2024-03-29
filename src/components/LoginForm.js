import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitFunc = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={5}>
          <Form onSubmit={onSubmitFunc}>

            <Form.Group>
              <Form.Label className="text-light mt-3">Email:</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light mt-3">Password:</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!passwordError}
              />
              <Button
                variant="secondary"
                className="mt-2"
                onClick={handleTogglePassword}
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </Button>
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="my-3"
              variant="primary"
              type="submit"
              disabled={!!emailError || !!passwordError}
            >
              Login
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
