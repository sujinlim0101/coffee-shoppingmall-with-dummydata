import React from "react";
import {Link} from "react-router-dom";
class ItemInfo extends React.Component {
    render() {

        return (
            <div className="col-6 col-sm-4 col-md-3 mb-4 mt-2" >
                <div className="card" style={{border: "none"}}>
                        <Link to={`products/${this.props.item.productID}`} state={this.props.item}>                        
                        <div className="scale"><img src={'/images/'+this.props.item.mainimg} className="card-img-top" alt={this.props.item.title}
                        style={{border:"1px solid #d2d0d0",  height:"auto"}}/></div>
                        <div className="card-body">
                            <p className="card-title mb-0">{this.props.item.title}</p>
                            <h6 className="card-text">{this.props.item.price}원</h6>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ItemInfo;