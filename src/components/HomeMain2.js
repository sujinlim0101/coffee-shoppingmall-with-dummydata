import React from "react";
import ItemList from "./ItemList";


class HomeMain2 extends React.Component{
    render() {
        return( 
            <div className={"container"}>
                <div className="mt-5"></div>
                <ItemList item={"beans"}></ItemList>
                <div className="mt-5"></div>
                <ItemList item={"tools"}></ItemList>
            </div>
        );
    }
}

export default HomeMain2;