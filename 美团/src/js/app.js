/**
 * Created by chenyang on 17/3/3.
 */
// require("./index.js");
var React = require("react");
var ReactDOM = require("react-dom");
import home from "./containers/home.js";
import second from "./components/second.js"
import { Router, Route, hashHistory } from 'react-router';

import "../css/base.css";
import "../css/common.css"
import "../font/iconfont.css"


//引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)
if(!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
}



// import { Button } from 'antd-mobile';
// ReactDOM.render(<Button>Start</Button>, document.getElementById('example'));


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={home}/>
        <Route path="/second" component={second}/>
    </Router>
), document.getElementById('example'));
