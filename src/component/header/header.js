import React, {Component} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className={'component_header'}>
                <NavLink to={'/react_router_demo/build/app'} activeStyle={{color: 'green', fontWeight: 'bold'}}>
                    <a>首页</a>
                </NavLink>
                <NavLink to={'/react_router_demo/build/goods_list'} activeStyle={{color: 'green', fontWeight: 'bold'}}>
                    <a>商品</a>
                </NavLink>
                <NavLink to={'/react_router_demo/build/about'} activeStyle={{color: 'green', fontWeight: 'bold'}}>
                    <a>关于</a>
                </NavLink>
            </div>
        );
    }
}
