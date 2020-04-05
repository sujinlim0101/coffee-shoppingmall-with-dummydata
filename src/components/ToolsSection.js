import React from "react";
import ItemList from "./ItemList";

class ToolsSection extends React.Component{
    render(){
        return (
            <div className={"container"}>
                <ItemList item={"tools"} title={"TOOLS"}></ItemList>
            </div>
        );
    }
}

export default ToolsSection;