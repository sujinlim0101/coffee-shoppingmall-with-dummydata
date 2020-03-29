import React from 'react';
import './App.css';
import MyNav from "./components/MyNav";
import HomeSection from "./components/HomeSection";
import BeansSection from "./components/BeansSection"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomeMain1 from "./components/HomeMain1";
import ToolsSection from "./components/ToolsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav className="App">
                    <MyNav></MyNav>
                </nav>
                <Switch>
                    <Route path="/" exact={true} component={HomeMain1}/>
                    <Route path="/beans" component={BeansSection}/>
                    <Route path="/tools" component={ToolsSection}/>
                    <Route path="/about" component={AboutSection}/>
                    <Route path="/contact" component={ContactSection}/>
                </Switch>
            </Router>
        );
    }
}




export default App;
