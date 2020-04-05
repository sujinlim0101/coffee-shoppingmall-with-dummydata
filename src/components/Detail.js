import React , { useState, useEffect } from 'react';
 class Detail extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLoading: true,
      product: {},
      order: {
        quantity: 1,
        productId: 1,
        userId: 1
      }
    };
  };
 
  minus = () => {
    var quantity = this.state.order.quantity;
    if(quantity > 0){
      quantity--
    }else{
      quantity = 0;
    }
   
    this.setState({ order: { quantity } });

  }

  add = () => {
    var quantity = this.state.order.quantity;
    quantity++;
    this.setState({ order: { quantity } });
  }
  componentDidMount() {
    const productId = this.props.match.params.id;
    fetch('/detail-' + productId + '.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          product: result,
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      )
  }
  render(){ 
    return (
      <div className="container mt-3">
        <div className="row pb-5" style={{ borderBottom: '1px solid #efecec' }}>
          <div className="col-sm-5">
            <img className="img-fluid" style={{ width: '100%' }} src={this.state.product.src} />
          </div>
          <div className="col-sm-7">
            <div className="mt-2">
              <h2>{this.state.product.title}</h2>
              <span style={{ color: 'gray' }}>{this.state.product.subtitle}</span>
            </div>
            <div className="mt-5" style={{ borderBottom: '1px solid #efecec' }}>
              <span style={{ fontSize: '0.875rem' }}>가격</span>
              <p style={{ fontSize: '2rem' }}>{this.state.product.price}</p>
            </div>
            <div className="row">
              <div class="col-12 mt-3">
                <table style={{ borderBottom: '1px solid #efecec', width: '100%' }} cellpadding="10">
                  <tr style={{ borderBottom: '1px solid #efecec' }}>
                    <td style={{ color: 'gray' }}>원산지</td>
                    <td>{this.state.product.origin}</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'gray' }}>수량</td>
                    <td style={{ alignItems: 'center' }}>
                      <form className="row">
                        <div className="input-group col-8 ">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.minus}
                            >-</button>
                          </div>
                          <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={this.state.order.quantity} style={{ textAlign: 'center' }} />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.add}>+</button>
                          </div>
                        </div>
                      </form>
                    </td>
                  </tr>
                </table>
                <div className="mt-5">
                  <button type="button" class="btn btn-outline-success mt-3 mr-1 "
                    style={{ width: '40%' }}>장바구니</button>
                  <button type="button" class="btn btn-success mt-3 ml-2"
                    style={{ width: '50%' }}>결제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4>{this.state.product.descTitle1}</h4>
          <p>{this.state.product.desc1}</p>
        </div>
        <div>
          <h4>{this.state.product.descTitle2}</h4>
          <p>{this.state.product.desc2}</p>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  };
};

export default Detail;