import React from 'react';
import HomeMain1 from "./HomeMain1";
import HomeMain2 from "./HomeMain2";
import "./css/MySection.css"

class HomeSection extends React.Component{
    render(){
        return(
            <section className={"section"}>
                <HomeMain1></HomeMain1>
                <HomeMain2></HomeMain2>
            </section>
        );
    }
}

export default HomeSection;