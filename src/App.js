import React from 'react';
import './App.css';
import MyNav from "./components/MyNav";
import MySection from "./components/MySection";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MyNav></MyNav>
                <div className={"empty1"}></div>
                <MySection></MySection>
            </div>
        );
    }
}

export default App;
