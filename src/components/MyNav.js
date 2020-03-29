import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomeMain1 from "./HomeMain1";
import BeansSection from "./BeansSection";
import ToolsSection from "./ToolsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

class MyNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={"navbar"}>
                <Link to="/" className={"logo"}>
                    <img src={require('./../images/Logo.png')} alt="Logo"
                         width={170}/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/beans" className={"nav3 nav2 nav1"}>BEANS</Link>
                        <Link to="/tools" className={"nav2 nav1"}>TOOLS</Link>
                        <Link to="/about" className={"nav2 nav1"}>ABOUT US</Link>
                        <Link to="/contact" className={"nav2"}>CONTACT US</Link>
                    </Nav>
                    <Nav>
                        <Button variant="outline-dark" className={"nav2"}><Link to="/login">로그인</Link></Button>
                        <Button variant="outline-dark" className={"nav2"}><Link to="/signup">로그아웃</Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNav;