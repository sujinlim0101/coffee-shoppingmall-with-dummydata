import React from "react";
import ItemList from "./ItemList";


class HomeMain2 extends React.Component{
    render() {
        return( 
            <div className={"container"}>
                <div className="mt-5"></div>
                <ItemList item={"featuredBeans"} title={"이런 커피 어때요?"}></ItemList>
                <div className="mt-5"></div>
                <ItemList item={"featuredTools"} title={"요즘 뜨는 커피 도구"}></ItemList>
            </div>
        );
    }
}

export default HomeMain2;