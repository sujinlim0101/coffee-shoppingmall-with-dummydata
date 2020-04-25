import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class MyNav extends React.Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={"navbar container-fluid sticky-top"} style={{ textAlign:"center", 
            boxShadow:  "rgb(246, 204, 152) 0px 2px 3px" }} width={150}>
                <div className={"container"}>
                    <Link to="/" className={"logo mr-5"}>
                        <img src={require('./../images/daylogo.png')} alt="Logo"
                             width={140} height={50}/>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="" >
                            <Link to="/beans" className={"nav2 nav1 mx-5 category"}>BEANS</Link>
                            <Link to="/tools" className={"nav2 nav1 mx-5 category"}>TOOLS</Link>
                            <Link to="/about" className={"nav2 nav1 mx-5 category"}>ABOUT US</Link>
                            <Link to="/contact" className={"nav2 nav1 mx-5 category"}>CONTACT US</Link>
                            <Link to="/login" className={"nav2 nav1 mr-2 mt-2 linkLogin"}>로그인</Link>
                            <Link to="/signup" className={"nav2 nav1 mr-2 mt-2 linkLogin"}  style={{fontSize:"0.7em" ,textAlign:"center", float: "right"}}>회원가입</Link>
                          
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