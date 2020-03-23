import React from 'react';
import "./css/HomeMain1.css";

class HomeMain1 extends React.Component{
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

export default HomeMain1;