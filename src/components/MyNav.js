import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="white" variant="light" className={"totalNav"}>
                <Navbar.Brand href="#home" className={"logo"}>
                    <img src={require('./../images/Logo.png')} alt="Logo"
                         width={170}
                    />
                </Navbar.Brand>
                <Nav className="mr-auto navbar-center">
                    <Nav.Link href="#beas">BEANS</Nav.Link>
                    <Nav.Link href="#tools">TOOLS</Nav.Link>
                    <Nav.Link href="#about">ABOUT US</Nav.Link>
                    <Nav.Link href="#contact">CONTACT US</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-dark">Sign in</Button>&nbsp;
                    <Button variant="outline-dark">Sign up</Button>
                </Form>
            </Navbar>
        );
    }
}

export default MyNav;