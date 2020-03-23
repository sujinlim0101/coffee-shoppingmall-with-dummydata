import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Link from "react-router-dom";

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="white" variant="light" className={"totalNav"}>
                <Navbar.Brand href="/" className={"logo"}>
                    <img src={require('./../images/Logo.png')} alt="Logo"
                         width={170}
                    />
                </Navbar.Brand>
                <Nav fill variant="tabs navbar-center" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href={"/beans"}>BEANS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href={"/tools"}>TOOLS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" href={"/aboutus"}>ABOUT US</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" href={"/contactus"}>CONTACT US</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline className={"signinup"}>
                    <Button variant="outline-dark" className={"signin"}>Sign in</Button>&nbsp;
                    <Button variant="outline-dark" className={"signup"}>Sign up</Button>
                </Form>
            </Navbar>
        );
    }
}

export default MyNav;