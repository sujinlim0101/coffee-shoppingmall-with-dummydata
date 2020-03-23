import React from 'react';
import './App.css';
import MyNav from "./components/MyNav";
import HomeSection from "./components/HomeSection";
import BeansSection from "./components/BeansSection"
import {HashRouter, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <MyNav></MyNav>
                    <div className={"empty1"}></div>
                    <Route path={"/"} exact={true} component={HomeSection}/>
                    <Route path={"/beans"} component={BeansSection}/>
                </HashRouter>
            </div>
        );
    }
}

export default App;
