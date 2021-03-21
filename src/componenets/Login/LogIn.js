import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import Menu from "../menu/menu";
import "./LogIn.css";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  const [users, setUsers] = useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  })
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({});
  var provider = new firebase.auth.GoogleAuthProvider();
  var ghprovider = new firebase.auth.GithubAuthProvider();

  // Google start
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        var user = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };

  // git hub start
  const handleGitHubSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(ghprovider)
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

  const handleBlur = (e) => {
   let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === "password") {
      const passwordformat = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(e.target.value)
    }
    if (e.target.name === "FirstName") {
      const User_name = /^[a-zA-Z\-]+$/.test(e.target.value);
      
    }

    if(isFormValid){
      const newUserInfo = {...users};
      newUserInfo[e.target.name] = e.target.value;
      setUsers(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if(users.email && users.password){

      firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
  .then((userCredential) => {
    var users = userCredential.users;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    }
    e.preventDefault();
  };

  return (
    <div>
      <Menu></Menu>
      <Container>
  <Row>
    <Col sm={8}>
    <div className="logIn_box">
        <div className="login_box_inner">
          <h5>Create Account</h5>
          <Form onClick={handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Control
                  type="text"
                  name="FirstName"
                  title="Space is not acceptable"
                  placeholder="First name"
                  onBlur={handleBlur}
                  required
                />
                  <ul className="requarment_login">
                  <small>
                  <li>Spece is not acceptable</li>
                  <li>Special charecter not valid</li>
                  <li>Dot not valid</li>
                  </small>
                </ul>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Username or Email"
                  onBlur={handleBlur}
                  required
                />
                <ul className="requarment_login">
                  <small>
                  <li>Any letter or number: a-z, A-Z, 0-9</li>
                  <li>A dot (.) but should not be first or last character</li>
                  <li>punctuation:@</li>
                  <li>special characters: !#$%’*+-/=?^_|~</li>
                  <li>The hyphen (-) but should not be first or last character</li>
                  </small>
                </ul>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  required
                />
                <ul className="requarment_login">
                  <small>
                  <li>Minimum 8 characters</li>
                  <li>At least one uppercase character</li>
                  <li>At least one lowercase character</li>
                  <li>At least one digit</li>
                  <li>At least one special character</li>
                  </small>
                </ul>
              </Col>
            </Form.Row>
            <button type="submit" value="Submit" className="createAcountBtn" onClick={handleGoogleSignIn}>
              Creat account
            </button>
          </Form>
          <p className="alraedy_text">
            <small>
              Already have an account?
              <a className="login_text" href="/LoginTwo">
                Login
              </a>
            </small>
          </p>
        </div>
      </div>
    </Col>
    <Col sm={4}>
    <div>
          <br/><br/><br/><br/><br/>
        <Button
          variant="outline-primary"
          size="lg"
          block
          onClick={handleGoogleSignIn}
        >
          Google
        </Button>

        <Button
          variant="outline-dark"
          size="lg"
          block
          onClick={handleGitHubSignIn}
        >
          Git hub
        </Button>
      </div>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default LogIn;
