import React from "react";
import "./css/MyNav.css";
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';


class MyNav extends React.Component {
    constructor(props) {
        super(props);
        const { location } = props;
        this.state = {
          
        };
      };
      
    render() {
        let resultForm;
        const logout = () => {
            localStorage.removeItem("login_email");
            window.location.reload();
        };

        const handleSelect = (selectedKey) => {
            this.setState({activeKey: selectedKey});
        };

        function getResultForm() {
            if (localStorage.getItem("login_email")) {
                resultForm = (
                    <>
                        <Nav.Link href="/cart" className="mx-2"><FiShoppingCart style={{fontSize:"1.7em", color:"#504e4e"}}></FiShoppingCart></Nav.Link>
                        <Nav.Link className="userinfo" href="/logout" className="mx-2" style={{fontSize:"12px", color:"rgb(72, 71, 71)",padding:"13px"}} onClick={logout} >로그아웃</Nav.Link>
                    </>
                );
                return resultForm;
            } else {
                resultForm = (
                    <>
                        <Nav.Link className="mx-2 userinfo" href="/login" style={{fontSize:"12px", color:"rgb(72, 71, 71)",padding:"13px"}}>로그인</Nav.Link>
                        <Nav.Link className="userinfo" href="/signup" style={{fontSize:"12px", color:"rgb(72, 71, 71)",padding:"13px"}}>회원가입</Nav.Link>
                    </>
                )
                return resultForm;
            }
        }
        getResultForm();


        return (
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light"
                className={"navbar container-fluid sticky-top"}
                style={{
                    textAlign: "center",
                    boxShadow: "rgb(246, 204, 152) 0px 2px 3px"
                }} width={150}>
                <div className="container">
                <Navbar.Brand href="/" className="mx-5"><img src={require('./../images/daylogo.png')} alt="Logo"
                             width={140} height={50}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        <Nav.Link eventKey={1} as={Link} to="/beans" className="mx-4 category">BEANS</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/tools" className="mx-4 category"> TOOLS</Nav.Link>
                        <Nav.Link eventKey={3} as={Link} to="/about" className="mx-4 category">ABOUT US</Nav.Link>
                        <Nav.Link eventKey={4} as={Link} to="/contact" className="mx-4 category">CONTACT US</Nav.Link>
                    </Nav>
                    <Nav>
                        {resultForm}
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default MyNav;