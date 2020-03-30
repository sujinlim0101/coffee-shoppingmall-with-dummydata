import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class MyNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={"navbar"}>
                <div className={"container"}>
                    <Link to="/" className={"logo mr-4"}>
                        <img src={require('./../images/Logo.png')} alt="Logo"
                             width={170}/>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/beans" className={"nav2 nav1 mr-4"}>BEANS</Link>
                            <Link to="/tools" className={"nav2 nav1 mr-4"}>TOOLS</Link>
                            <Link to="/about" className={"nav2 nav1 mr-4"}>ABOUT US</Link>
                            <Link to="/contact" className={"nav2"}>CONTACT US</Link>
                        </Nav>
                        <Nav>
                            <Button variant="outline-dark" className={"nav2 mr-1"}><Link to="/login">로그인</Link></Button>
                            <Button variant="outline-dark" className={"nav2"}><Link to="/signup">로그아웃</Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default MyNav;