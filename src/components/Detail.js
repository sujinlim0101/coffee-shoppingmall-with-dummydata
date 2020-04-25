import React , { useState, useEffect } from 'react';
 class Detail extends React.Component {
  //TODO: uerId 값을 context 또는 서버에서 처리.
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
    if(quantity > 1){
      quantity--
    }else{
      quantity = 1;
    }
   
    this.setState({ order: { quantity } });

  }

  add = () => {
    var quantity = this.state.order.quantity;
    if(quantity < 99){
      quantity++;
    }else{
      quantity = 99;
    }
    
    this.setState({ order: { quantity } });
  }
  componentDidMount() {
    const productId = this.props.match.params.productID;
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
      <div className="container mt-5">
        <div className="row pb-5 " style={{ borderBottom: '1px solid rgb(209, 203, 203)' }}>
          <div className="col-sm-5">
            <img className="img-fluid" style={{ width: '100%' }} src={this.state.product.mainimg} />
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
                    <td style={{ color: 'gray' }} width="30%">원산지</td>
                    <td>{this.state.product.origin}</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'gray' }}>수량</td>
                    <td style={{ alignItems: 'center' }}>
                      <form className="row">
                        <div className="input-group col-6 col-sm-8 col-md-6 col-lg-4">
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.minus}
                            >-</button>
                          </div>
                          <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={this.state.order.quantity} style={{ textAlign: 'center', text:"x-small"}} />
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
        <div>
          <img className="img-fluid mt-5 mb-4 center" src={this.state.product.subimg} style={{marginLeft:"auto", marginRight:"auto", display: "block"}}></img>
        </div>
        <h3 className="mt-4 pb-4 mx-5" style={{color:"#5f5c5c", textAlign:"center"}}>[{this.state.product.title}]</h3>
        <h5 className="pb-4 mx-5 pt-4"style={{color:"#5f5c5c", textAlign:"center", 
          borderTop:"1px solid rgb(250, 181, 140)", borderBottom:"1px solid rgb(250, 181, 140)",backgroundColor:"#fffcf8"}}>{this.state.product.subtitle}</h5>
        <h2  className="pb-4" style={{color:"#5f5c5c", textAlign:"center", marginTop:"80px"}}>
          <img width={25} height={25} src={require('./../images/orangecheck.png')}/> 데이라이트 Check Point</h2>
        <div>
          <h4 className="mt-4" dangerouslySetInnerHTML={ {__html:this.state.product.descTitle1} }></h4>
          <p className="mt-3" dangerouslySetInnerHTML={ {__html:this.state.product.descript1} }></p>
        </div>
        <div>
          <h4 className="mt-4">{this.state.product.descTitle2}</h4>
          <p className="mt-3">{this.state.product.descript2}</p>
        </div>
          <div>
            <h4 className="mt-4">{this.state.product.descTitle3}</h4>
            <p className="mt-3">{this.state.product.descript3}</p>
          </div>
        
        <br></br>
        <br></br>
      </div>
    );
  };
};

export default Detail;