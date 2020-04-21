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
        
        if ('title'  in props) this.state.title = props.title;
        console.log(this.state.title);
        switch (props.item) {
            case 'featuredBeans':
                this.state.url = '/featuredBeans.json';
                break;
            case 'featuredTools':
                this.state.url = '/featuredTools.json';
                break;
           case 'beans':
                this.state.url = 'beans.json';
                break;
            case 'tools':
                this.state.url = 'tools.json';
                break;
            default:
                alert('Never get here');
                break;
        }
    }
    componentWillMount() {
        fetch(this.state.url)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.items,
                url:result.url
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