import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import App from "../../App";
import GoodsList from "../goods/goods_list";
import About from "../about/about";
import GoodsDetail from "../goods/goods_detail";
import {mockGoodsData} from "../data/mock";

const GoodsListModel = match => {
    return <GoodsList data={mockGoodsData(20)}/>;
};

export default class Body extends Component {
    render() {
        return (
            <div className={'component_body'}>
                <Switch>
                    <Route exact path={['/', '/app']} component={App}/>
                    <Route exact path={'/goods_list'} component={GoodsListModel}/>
                    <Route exact path={'/goods_detail'} component={GoodsDetail}/>
                    <Route exact path={'/about'} component={About}/>
                </Switch>
            </div>
        );
    }
}
