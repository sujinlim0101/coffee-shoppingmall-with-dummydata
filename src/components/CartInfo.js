import React from 'react';

class CartInfo extends React.Component{
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

    render(){

        return(
          
            <tr className="row">
            <td className="col"><input type="checkbox"/><img className="ml-3" src={this.props.item.src} 
            width={60} height={80}/></td>
            <td className="col">
                <p>{this.props.item.title}</p>
                {this.props.item.price}원
            </td>
            <td className="col">
                
                {this.props.item.ea}</td>
            <td className="col">{this.props.item.price*this.props.item.ea}원</td>
            </tr>
        )

    }
}
export default CartInfo;