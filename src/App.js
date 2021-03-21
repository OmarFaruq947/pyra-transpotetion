import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "firebase/auth";
import firebase from "firebase/app";
import Home from "./componenets/Home/Home";
import Blog from "./componenets/Blog/Blog";
import Contact from "./componenets/Contact/Contact";
import LogIn from "./componenets/Login/LogIn";
import Destination from "./componenets/Destination/Destination";
import PrivateRoute from "./componenets/PriveteRoute/PrivateRoute";
import LoginTow from "./componenets/LoginTow/LoginTow";
import { Badge } from "react-bootstrap";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Badge pill variant="primary" className="userName">Name: {loggedInUser.name}</Badge>
        <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/Destination/:id">
              <Destination />
            </PrivateRoute>

            <Route path="/Destination">
            <LogIn />
            </Route>

            <Route path="/Contact">
              <Contact/>
            </Route>

            <Route path="/Blog">
              <Blog />
            </Route>

            <Route path="/LogIn">
              <LogIn />
            </Route>

            <Route path="/LoginTwo">
              <LoginTow />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
