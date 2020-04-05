import React from "react";
import {Link} from "react-router-dom";
class ItemInfo extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-3">
                <div className="card" style={{border: "none"}}>
                        <Link to={`products/${this.props.item.id}`} state={this.props.item}>
                        <img src={this.props.item.src} className="card-img-top" alt={this.props.item.title}/>
                        <div className="card-body">
                            <p className="card-title mb-0">{this.props.item.title}</p>
                            <h6 className="card-text">{this.props.item.price}</h6>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ItemInfo;