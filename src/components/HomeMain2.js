import React from "react";
import ItemList from "./ItemList";
import "./css/HomeSection2.css";


class HomeMain2 extends React.Component{
    render() {
        return( 
            <div>
                <div className="container">
                    <div className="" style={{marginTop:"50px"}}>
                        <div className="homeText px-5"><h3 className="pb-3 px-5 mb-3 pt-3">커피 한잔 어때요?</h3></div>
                     <ItemList item={"featuredBeans"} ></ItemList>
                    </div>
                </div>
                <div className="mt-3" style={{backgroundColor:"#f5f4f1"}}>
                    <div className="container">
                        <div className="homeText px-5 pt-5"><h3 className="pb-3 px-5 mb-3 pt-3">요즘 뜨는 커피 도구</h3></div>
                        <ItemList item={"featuredTools"} ></ItemList>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeMain2;