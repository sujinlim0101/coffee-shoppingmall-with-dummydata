import React from 'react';
import {Link} from "react-router-dom";

class OrderSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sellId:null
        }
    }
    componentDidMount() {
        const sellId = this.props.match.params.sellID;
        this.setState({sellId});
    }

    render(){
        return(
            <div className="container" style={{height:"600px", textAlign:"center", margin: "auto" }}>
                <div className=" pb-2" style={{borderBottom:"1px solid rgb(247, 212, 169)", marginTop:"100px"}}>
                    <h5 className="pb-2">짝짝! 주문이 완료됐습니다.</h5>
                    <p>맛있고 신선한 원두만을 보내드릴게요.</p>
                </div>
                        <p className="mt-4 mr-5" style={{ color:"gray",textAlign:"right"}}> 주문번호 : {this.state.sellId} </p>
                        <Link to="/"><button className="mt-5 btn btn-success" style={{float: "center" ,width:"150px"}}>확인</button></Link>
            </div>
        )   
    }
}
export default OrderSection;