import React from 'react';

class Detail extends React.Component {
  state = {
    isLoading: true,
    product: {},
    order: {
      quantity: 1,
      productId: 1,
      userId: 1

    }
  };
  // Load data
  getProduct = async () => {
    // TODO: Use axios here get data from server
    // const {data: {data: {product}}} = await axios.get('url');
    let product = {
      src: 'http://via.placeholder.com/430x522',
      title: '케냐 아라비카 오가닉 스페셜',
      subtitle: '오가닉 스페셜 원두, 데이라이트에서 직접 볶은 원두입니다.',
      price : '15,000원',
      origin:'kenya',
      descTitle1:'케냐 원두',
      desc1: '케냐 - 잘 익은 체리만 손으로 직접 수확하며 수세식 가공 후 선별 역시 핸드픽으로 하는 것이 특징이다. 원두의 크기에 따라 AA, AB 등의 등급으로 나뉜다. 잘 익은 포도나 건포도를 연상시키는 신맛과 자몽을 연상시키는 상큼한 과일향이 특징이다. 전체적으로 밝은 느낌을 주며 아이스로 마셔도 그 개성이 잘 드러나기 때문에 아이스커피로의 선호도가 매우 높은 편이다.',
      descTitle2:'케냐 아라비카',
      desc2:'아프리카 킬리만자로의 동쪽 케냐에서 재배되는 최고의 커피로 강렬한 향에 무겁지 않으면서 풍부한 맛이 최고로 꼽힙니다. 가볍고 오묘한 맛이 과일향과 같으며 뜨거운 커피, 아이스커피 모두 최상의 맛을 냅니다. 에스프레소 기계로 추출하면 더욱 맛있는데요, 진하게 볶으면 향이 더 진해지는 특성이 있습니다. 케냐의 커피는 세계 최고 중 하나로 향기롭고 톡 쏘는 신맛, 풍부한 과일향을 풍기는 원두입니다. 소규모 농장에서 재배한 커피를 중앙으로 모아 등급을 결정하는데, 알이 굵고 잘 여문 원두에는 케냐 AA라는 등급을 줍니다.'
    }
    this.setState({product, isLoading: false});
  }
  minus = () => {
    var quantity = this.state.order.quantity;
    quantity --;
    this.setState({order: {quantity}});
  }
  add = () => {
    var quantity = this.state.order.quantity;
    quantity ++;
    this.setState({order: {quantity}});
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 10000);  // Data fetch timeout is 10 sec
    this.getProduct();
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row pb-5" style={{borderBottom:'1px solid #efecec'}}>
          <div className="col-sm-5">
            <img className="img-fluid" style={{width:'100%'}} src={this.state.product.src} alt="Card image cap" />
          </div>
          <div className="col-sm-7">
            <div className="mt-2">
              <h2>{this.state.product.title}</h2>
              <span style={{color:'gray'}}>{this.state.product.subtitle}</span>
            </div>
            <div className= "mt-5" style={{borderBottom:'1px solid #efecec'}}>
              <span style={{fontSize:'0.875rem'}}>가격</span>
              <p style={{fontSize:'2rem'}}>{this.state.product.price}</p>
            </div>
            <div className="row">
              <div class="col-12 mt-3">
                <table style={{borderBottom:'1px solid #efecec' ,width:'100%'}} cellpadding="10">
                <tr style={{borderBottom:'1px solid #efecec'}}>
                  <td style={{color:'gray'}}>원산지</td>
                  <td>{this.state.product.origin}</td>
                </tr>
                <tr>
                  <td style={{color:'gray'}}>수량</td>
                  <td style={{alignItems:'center'}}>
                    <form className="row">
                    <div className="input-group col-8 ">
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.minus}
                        >-</button>
                      </div>
                      <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={this.state.order.quantity} style={{textAlign:'center'}}/>
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
                  style={{width:'40%'}}>장바구니</button>
                  <button type="button" class="btn btn-success mt-3 ml-2"
                  style={{width:'50%'}}>결제</button>
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
  }
};

export default Detail;