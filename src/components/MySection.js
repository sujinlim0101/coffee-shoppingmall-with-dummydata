import React from 'react';
import Main1 from "./Main1";
import "./css/MySection.css"

class MySection extends React.Component{
    render(){
        return(
            <section className={"section"}>
                <Main1></Main1>
            </section>
        );
    }
}

export default MySection;