import React, {Component} from 'react';
import './goods_item.css'
import {Link} from "react-router-dom";

export default class GoodsItem extends Component {

    render() {
        let data = this.props.data;
        let target = {
            pathname: '/goods_detail',
            state: {
                name: data.name,
                price: data.price,
                image: data.image,
            }
        };
        return (
            <div className={'component_goods_item'}>
                <Link to={target}>
                    <img src={data && data.image}/>
                </Link>
                <div className={'text_group'}>
                    <div>
                        商品名称: <span className={'label'}>{data && data.name}</span>
                    </div>
                    <div>
                        商品价格: <span
                        className={'label'}>￥{data && data.price}</span>
                    </div>
                </div>
            </div>
        );
    }

}
