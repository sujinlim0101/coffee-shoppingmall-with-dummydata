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
        
        switch (props.item) {
            case 'featuredBeans':
                this.state.url = "http://211.63.89.156:8080/daylight/featuredbeans"
                //this.state.url = '/featuredBeans.json';
                break;
            case 'featuredTools':
                this.state.url = "http://211.63.89.156:8080/daylight/featuredtools"
                break;
            //this.state.url = "http://211.63.89.154:8080/SpringBootRestAPIDemo/beans"
           case 'beans':
               //"http://211.63.89.147:8080/daylight/beans"
            this.state.url = "http://211.63.89.156:8080/daylight/beans"
                break;
            //this.state.url = "http://211.63.89.154:8080/SpringBootRestAPIDemo/tools"
            case 'tools':
                this.state.url = "http://211.63.89.156:8080/daylight/tools"
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