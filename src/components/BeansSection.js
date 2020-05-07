import React from "react";
import ItemList from "./ItemList";
import { GiCoffeeBeans } from 'react-icons/gi';


class BeansSection extends React.Component{
    render(){
        return (
            <div className="container mt-5" style={{marginTop:"100px"}}>
                <div className="px-5 mb-5" height={50}>
                    <h3 className="pb-3 px-5 mb-2 pb-3" 
                        style={{textAlign:"center", borderBottom:"#e4e0e0 solid 1px" ,position:"relative", color:"#ff7200"}}>
                        <img src={require('./../images/coffeepackageIcon.png')} width={50} height={45}></img> Beans
                    </h3></div>
                    <ItemList item={"beans"}  title={"BEANS"}></ItemList>
            </div>
        );
    }
}

export default BeansSection;