import React, {Component} from 'react';
import './goods_detail.css'

export default class GoodsDetail extends Component {
    render() {
        let data = this.props.location.state;
        return (
            <div className={'component_goods_detail'}>
                <div>
                    <span>商品名称:</span>
                    <span className={'label'}>{data && data.name}</span>
                </div>
                <div>
                    商品价格: <span className={'label'}>￥{data && data.price}</span>
                </div>
                <img src={data && data.image}/>
            </div>
        );
    }
}
