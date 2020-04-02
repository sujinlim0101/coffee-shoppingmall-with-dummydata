import React from "react";
import ItemInfo from "./ItemInfo";

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,
            items: [],
            title: null
        };
        
        if (props.item === 'beans') {
            this.state.url = '/beans.json';
        } else if (props.item === 'tools') {
            this.state.url = '/tools.json';
        }
    }
    componentWillMount() {
        fetch(this.state.url)
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              title: result.title,
              items: result.items,
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
          }
        )
    }
    render() {
        return (
            <div>
                <h4 className="mb-4 pb-2" style={{borderBottom: "solid 1px #efecec"}}>{this.state.title}</h4>
                <div className="row">
                    {this.state.items.map((item, i) => {
                        return (
                            <ItemInfo name={item.name} image={item.image} description={item.description} key={item.id}/>);
                    })
                    }
                </div>
            </div>
        );
    }
}

export default ItemList;