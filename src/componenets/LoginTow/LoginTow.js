import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Menu from "../menu/menu";
import "./LogInTow.css";
import { Col, Form, Button } from "react-bootstrap";
import firebaseConfig from "../Login/firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginTow = () => {
  const [user, setUser] = useState({});
  console.log("data", user);
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setUser(user);
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };

  const handleBlur_t = (e) => {
    console.log(e.target.name, e.target.value);
  };
  const handleSubmit_t = () => {};
  return (
    <div>
      <Menu></Menu>
      <div className="logIn_box_two">
        <div className="login_box_inner_two">
          <h5>Login</h5>
          <Form onClick={handleSubmit_t}>
            <Form.Row>
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  onBlur={handleBlur_t}
                  required
                />
                <br />
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur_t}
                  required
                />
                <br />
                <Form.Check
                  type="checkbox"
                  name="checkbox"
                  label="Remember Me"
                  onBlur={handleBlur_t}
                  required
                />
              </Col>
            </Form.Row>
            <br />
            <button
              type="submit"
              value="submit"
              className="createAcountBtn_two"
            >
              Login
            </button>
          </Form>
          <p className="alraedy_text_two">
            <small>
              Don't have an account?
              <a className="login_text_two" href="/LogIn">
                Creat an account
              </a>
            </small>
          </p>
        </div>
      </div>
      <div className="google_github_login_two">
        <p className="OR_two">Or</p>
        <Button
          variant="outline-success"
          size="lg"
          block
          onClick={handleGoogleSignIn}
        >
          Google
        </Button>
        <Button variant="outline-dark" size="lg" block>
        Git hub
        </Button>
      </div>
    </div>
  );
};

export default LoginTow;
