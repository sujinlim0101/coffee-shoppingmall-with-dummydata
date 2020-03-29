import React from "react";
import ItemList from "./ItemList";

class BeansSection extends React.Component{
    render(){
        return (
            <div className={"container"}>
                <ItemList item={"beans"}></ItemList>
            </div>
        );
    }
}

export default BeansSection;