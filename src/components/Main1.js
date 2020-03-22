import React from 'react';
import "./css/Main1.css";

class Main1 extends React.Component{
    render(){
        return (
            <div className={"main1"}>
                <img src={require('./../images/main1.jpg')} alt="Logo"
                     width={"100%"}
                     height={400}
                />
            </div>
        );
    }
}

export default Main1;