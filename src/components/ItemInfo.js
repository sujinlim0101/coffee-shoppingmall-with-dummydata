import React from "react";

class ItemInfo extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-3">
                <div className="card" style={{border: "none"}}>
                    <a href="#">
                        <img src={this.props.image} className="card-img-top" alt={this.props.name}/>
                        <div className="card-body">
                            <p className="card-title mb-0">{this.props.name}</p>
                            <h6 className="card-text">{this.props.description}</h6>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ItemInfo;