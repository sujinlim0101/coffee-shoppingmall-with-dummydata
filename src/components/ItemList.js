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
            this.state.url = '/featuredBeans.json';
        } else if (props.item === 'tools') {
            this.state.url = '/featuredTools.json';
        }
    }
    componentWillMount() {
        fetch(this.state.url)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                title: null,
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
            console.log(error);
          }
        )
    }
    render() {
        return (
            <div>
                    <div className="row">
                    {this.state.items.map((item, i) => {
                        return (
                            <ItemInfo item={item} key={item.id}/>);
                    })
                    }
                </div>
            </div>
        );
    }
}

export default ItemList;