import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class MyNav extends React.Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={"navbar container-fluid mb-0"} style={{ textAlign:"center", boxShadow:  "rgba(37, 37, 40, 0.06) 0px 4px 4px"}}>
                <div className={"container"}>
                    <Link to="/" className={"logo mr-5"}>
                        <img src={require('./../images/'+'Logo2.png') } alt="Logo"
                             width={130}/>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="" >
                            <Link to="/beans" className={"nav2 nav1 mx-5 "} style={{fontWeight:"400", textAlign:"center" ,color:"#433f3f"}}>BEANS</Link>
                            <Link to="/tools" className={"nav2 nav1 mx-5"} style={{fontWeight:"400", textAlign:"center" ,color:"#433f3f"}}>TOOLS</Link>
                            <Link to="/about" className={"nav2 nav1 mx-5"} style={{fontWeight:"400", textAlign:"center" ,color:"#433f3f"}}>ABOUT US</Link>
                            <Link to="/contact" className={"nav2 nav1 mx-5"} style={{fontWeight:"400", textAlign:"center" ,color:"#433f3f"}}>CONTACT US</Link>
                            <Link to="/login" className={"nav2 nav1 mr-2 mt-2"} style={{fontSize:"0.7em" ,textAlign:"center", float: "right"}}>로그인</Link>
                            <Link to="/signup" className={"nav2 nav1 mr-2 mt-2"}  style={{fontSize:"0.7em" ,textAlign:"center", float: "right"}}>회원가입</Link>
                          
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default MyNav;