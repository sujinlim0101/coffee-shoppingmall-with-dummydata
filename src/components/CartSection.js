import React from 'react';

class CartSection extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          isloaded:true,
          items:[],
      }
  }

    componentDidMount() {
      fetch("cart.json")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
          this.updateCart();
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
  
  updateCart() {
    let total = 0;
    this.state.items.forEach(function (item) {
      if (item.checked) {
        total += (item.price * item.ea);
      }
    });
    this.setState({
      tot: total,
    })
    fetch('/cartupdate',{
      method: 'post',
      items: this.state.items
    })
  }

  check(index, e) {
    let checked = e.target.checked;
    const items = this.state.items;
    items[index].checked = checked;
    this.setState({
      items,
    });
    this.updateCart();
  }

  checkAll(e) {
    let checked = e.target.checked;
    const items = this.state.items;
    items.forEach(function (item) {
      item.checked = checked;
    });
    this.setState({
      items,
    });
    this.updateCart()
  }

  deleteChecked(forEach) {
    let items = [];
    this.state.items.forEach(function (item) {
      if (!item.checked) {
        items.push(item);
      }
    });
    this.setState({
      items,
    });
    this.updateCart();
  }
  
  order(){
    let orderItems = [];
    this.state.items.forEach(function(item){
      if(item.checked){
        orderItems.push(item)
      }
    })
    fetch('order.json', {
      method:'get',
      orderItems
    })
    .then(res => res.json())
    .then((result) => {
      this.props.history.push('/order/'+result.sellID);
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
    })
  }

  add(index, item, e) {
    let value = item.ea + 1;
    if (value > 99) value = 99;
    const items = this.state.items;
    items[index].ea = value;
    this.setState({
      items,
    });
    this.updateCart();
  }

  minus(index, item, e) {
    let value = item.ea - 1;
    if (value < 1) value = 1;
    const items = this.state.items;
    items[index].ea = value;
    this.setState({
      items,
    });
    this.updateCart();
  }

  render(){ 
    return(
      <div style={{marginBottom: '200px'}}>
        <div style={{margin: 'auto' ,width: '90%'}}>
          <h3 className="mt-5" style={{textAlign: 'center'}}>장바구니</h3>
          <p style={{textAlign: 'center', color: 'gray'}}>정확한 수량과 금액을 꼭 확인해주세요.</p>
          <table className="table mt-5" style={{borderBottom:"1px solid rgb(228, 225, 225)"}}>
            <thead>
              <tr className="" style={{borderTop: '2px solid rgb(255, 164, 124)' ,borderBottom: '1px solid #fff8f8' }} >
                <td className=""><div style={{fontSize: 'x-small'}}>All</div><input type="checkbox" onChange={this.checkAll.bind(this)}/></td>
                <td className="">상품이름</td>
                <td className="" width={120}>수량</td>
                <td className="" style={{textAlign: 'right'}}>가격</td>
              </tr>
            </thead>
              <tbody>  
                {this.state.items.map((item, i) => {
                  return (
                    <tr className="" key={i}>
                      <td style={{itemAlign:"center"}} ><input type="checkbox" checked={item.checked} onChange={this.check.bind(this, i)}/>
                        <img className="ml-3 img-fluid" src={item.src} width={60} height={80}/></td>
                      <td className="">
                        <p style={{overflow:"visible" ,fontSize:"small" }}>{item.title}</p>
                        <p style={{fontSize:"x-small"}}>{item.price}원</p>
                      </td>
                      <td className="" width={120} style={{verticalAlign: 'middle'}}>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-secondary" 
                                type="button" onClick={this.minus.bind(this, i, item)}
                                style={{ height:"22px", textAlign: 'center', fontSize:"5px", float:"left"}}
                              >-</button>
                            </div>
                            <input type="text" className="form-control px-0" placeholder="" aria-label="" 
                              aria-describedby="basic-addon1" value={item.ea} 
                              style={{ height:"22px", padding:"5px", textAlign: 'center', fontSize:"x-small",float:"left"}} />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" 
                                  type="button" onClick={this.add.bind(this, i, item)}
                                  style={{textAlign:"center", height:"22px", textAlign: 'center', fontSize:"5px", float:"left"}}
                                  >+</button>
                            </div>
                          </div>
                      </td>
                      <td className="" style={{textAlign: 'right' , verticalAlign: 'middle', fontSize:"small"}}>{item.price*item.ea}원</td>
                    </tr>
                  ); 
                })
              }
            </tbody>
          </table>
          <button className="btn btn-outline-secondary ml-1" style={{fontSize:"small"}} onClick={this.deleteChecked.bind(this)}>선택삭제</button>
          <p></p>
          <p style={{textAlign:"right"}}>총가격: {this.state.tot}</p>
          <button type="button" className="btn btn-success mt-3 mr-1 "
              style={{ width: '40%', float:"right" }} onClick={this.order.bind(this)}>주문하기</button>
        </div>
       </div>
     
    )
  }
}
export default CartSection;