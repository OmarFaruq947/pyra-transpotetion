import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./menu.css";

const Menu = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home" className="logo">
          <a href="">
            <img
              className="logo"
              src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
              alt="logo"
            /> <span className="logoA">pyra-transpotetion</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>

      <Nav className="justify-content-center" activeKey="/Home">
        <Nav.Item>
          <Nav.Link className="menu_text" href="/Home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="menu_text" eventKey="Destination" href="/LogIn">
            Destination
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="menu_text" eventKey="Blog" href="/Blog">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="menu_text" eventKey="Contact" href="/Contact">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="menu_text logIn_button"
            eventKey="LogIn"
            href="/LogIn"
          >
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Menu;
