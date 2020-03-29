import React from "react";
import ItemInfo from "./ItemInfo";

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [],
            item: null
        };
        if (props.item === 'beans') {
            this.state.itemData = [
                {name: "코스타리카 오가닉", image: "https://picsum.photos/id/231/250/320", description: "15,000원"},
                {name: "에티오피아 예가체프", image: "https://picsum.photos/id/232/250/320", description: "12,000원."},
                {name: "에티오피아 시다모", image: "https://picsum.photos/id/233/250/320", description: "12,000원"},
                {name: "케냐 AA 오가닉 스페셜", image: "https://picsum.photos/id/234/250/320", description: "12,000원"},
                {name: "과테말라 G2", image: "https://picsum.photos/id/235/250/320", description: "13,000원"},
                {name: "온두라스 G8", image: "https://picsum.photos/id/236/250/320", description: "11,000원"},
            ];
            this.state.item = 'BEANS'
        } else if (props.item === 'tools') {
            this.state.itemData = [
                {name: "코스타리카 오가닉", image: "https://picsum.photos/id/231/250/320", description: "15,000원"},
                {name: "에티오피아 예가체프", image: "https://picsum.photos/id/232/250/320", description: "12,000원."},
                {name: "에티오피아 시다모", image: "https://picsum.photos/id/233/250/320", description: "12,000원"},
                {name: "케냐 AA 오가닉 스페셜", image: "https://picsum.photos/id/234/250/320", description: "12,000원"},
                {name: "과테말라 G2", image: "https://picsum.photos/id/235/250/320", description: "13,000원"},
                {name: "온두라스 G8", image: "https://picsum.photos/id/236/250/320", description: "11,000원"},
            ];
            this.state.item = 'TOOLS';
        }
    }

    render() {
        return (
            <div>
                <h4 className="mb-4 pb-2" style={{borderBottom: "solid 1px #efecec"}}>{this.state.item}</h4>
                <div className="row">
                    {this.state.itemData.map((item, i) => {
                        return (
                            <ItemInfo name={item.name} image={item.image} description={item.description} key={i}/>);
                    })
                    }
                </div>
            </div>
        );
    }
}

export default ItemList;