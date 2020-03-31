import React from 'react';
import HomeMain1 from "./HomeMain1";
import HomeMain2 from "./HomeMain2";
import "./css/MySection.css"
import footer from "./footer";

class HomeSection extends React.Component{
    render(){
        return(
            <section className={"section"}>
                <HomeMain1></HomeMain1>
                <HomeMain2></HomeMain2>
                <div className="" style={{height:"100px"}}></div>
                <div className="container-fluid" style={{height:"150px", backgroundColor:"rgb(240, 236, 236)", fontSize:"0.7em"}} >
                    
                </div>
            </section>
        );
    }
}

export default HomeSection;