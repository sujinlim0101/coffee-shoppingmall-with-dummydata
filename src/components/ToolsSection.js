import React from "react";
import ItemList from "./ItemList";

class ToolsSection extends React.Component{
    render(){
        return (
            <div className="container mt-5" style={{marginTop:"100px"}}>
            <div className="px-5 mb-4"><h4 className="pb-3 px-5 mb-4" 
               style={{textAlign:"center", borderBottom:"#d4d1d1 solid 1px" ,position:"relative", lineHeight:"1.2"}}>
               <img src={require('./../images/dripperIcon.png')} width={50} height={50}></img> Tools</h4></div>
                <ItemList item={"tools"} title={"TOOLS"}></ItemList>
            </div>
        );
    }
}

export default ToolsSection;