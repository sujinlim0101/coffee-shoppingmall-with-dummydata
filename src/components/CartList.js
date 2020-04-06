import React from 'react';

class CartList{
    constructor(props) {
        super(props)
        this.state = {
          fruites: [
            {id: 1, value: "banana", isChecked: false},
            {id: 2, value: "apple", isChecked: false},
            {id: 3, value: "mango", isChecked: false},
            {id: 4, value: "grap", isChecked: false}
          ]
        }
      }
      
      componentDidMount() {
        const email = this.props.match.params.email;
        fetch('/cart-' + email + '.json')
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
            return(
              <div>
    
              </div>
            
            )
    
        }
    }
export default CartList;