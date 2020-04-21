import React from "react";
import ItemList from "./ItemList";
import { GiCoffeeBeans } from 'react-icons/gi';


class BeansSection extends React.Component{
    render(){
        return (
            <div className="container mt-5" style={{marginTop:"100px"}}>
            <div className="px-5 mb-4" height={50}><h4 className="pb-3 px-5 mb-4" 
                    style={{textAlign:"center", borderBottom:"#d4d1d1 solid 1px" ,position:"relative", lineHeight:"1.2", color:"#9e8276"}}>
                    <img src={require('./../images/beans.png')} width={30} height={30}></img> Beans</h4></div>
                <ItemList item={"beans"}  title={"BEANS"}></ItemList>
            </div>
        );
    }
}

export default BeansSection;