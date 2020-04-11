import React from "react";
import ItemList from "./ItemList";
import { GiCoffeeBeans } from 'react-icons/gi';


class BeansSection extends React.Component{
    render(){
        return (
            <div className={"container"}>
                <ItemList item={"beans"}  title={"BEANS"}></ItemList>
            </div>
        );
    }
}

export default BeansSection;