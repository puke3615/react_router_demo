import React, {Component} from 'react';
import GoodsItem from "./goods_item";
import './goods_list.css'

export default class GoodsList extends Component {

    render() {
        let data = this.props.data;
        let list = [];
        for (let i = 0; i < data.length; i++) {
            list.push(<GoodsItem data={data[i]}/>);
            if (i < data.length - 1) {
                list.push(<div className={'divider'}/>);
            }
        }
        return (
            <div className={'component_goods_list'}>
                {list}
            </div>
        );
    }
}
