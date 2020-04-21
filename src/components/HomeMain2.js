import React from "react";
import ItemList from "./ItemList";


class HomeMain2 extends React.Component{
    render() {
        return( 
            <div>
                <div className="container">
                    <div className="" style={{marginTop:"50px"}}>
                        <div className="px-5 container"><h4 className="pb-3 px-5 mb-3" 
                            style={{textAlign:"center", borderBottom:"1.2px solid rgb(219, 200, 178)" ,position:"relative", lineHeight:"1.2"}}>
                                오늘 이런 커피 어때요?</h4></div>
                     <ItemList item={"featuredBeans"} ></ItemList>
                    </div>
                </div>
                <div className="mt-3" style={{backgroundColor:"#f5f4f1"}}>
                    <div className="container">
                        <div className="px-5 pt-5"><h4 className="pb-3 px-5 mb-3" 
                            style={{textAlign:"center", borderBottom:"1.2px solid rgb(241, 193, 139)" ,position:"relative", lineHeight:"1.2"}}>요즘 뜨는 커피 도구</h4></div>
                        <ItemList item={"featuredTools"} ></ItemList>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeMain2;