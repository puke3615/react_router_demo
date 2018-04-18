import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./component/header/header";
import Body from "./component/body/body";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header/>
            <Body/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
