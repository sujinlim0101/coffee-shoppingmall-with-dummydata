import React from 'react';
import './App.css';
import MyNav from "./components/MyNav";
import HomeSection from "./components/HomeSection";
import BeansSection from "./components/BeansSection"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ToolsSection from "./components/ToolsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FooterSection from "./components/FooterSection"
import Detail from "./components/Detail"
import CartSection from './components/CartSection';
import OrderSection from './components/OrderSection';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <MyNav></MyNav>            
                    <Switch>
                        <Route path="/" exact={true} component={HomeSection}/>
                        <Route path="/beans" component={BeansSection}/>
                        <Route path="/tools" component={ToolsSection}/>
                        <Route path="/about" component={AboutSection}/>
                        <Route path="/contact" component={ContactSection}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/products/:productID" component={Detail}/>
                        <Route path="/cart" component={CartSection}/>
                        <Route path="/order/:sellID" component={OrderSection}/>
                    </Switch>
                    <FooterSection></FooterSection>                 
                </div>
            </Router>

               
        );
    }
}

export default App;
