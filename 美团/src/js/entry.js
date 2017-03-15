// require("./index.js");
var React = require("react");
var ReactDOM = require("react-dom");
import index from "./components/index.js";
import second from "./components/second.js"
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render((
    <Router history={hashHistory}>
        <IndexRoute component={index}/>
        <Route path="/second" component={second}/>
    </Router>
), document.getElementById('example'));
// {/*<Route path="/repos" component={Repos}/>*/}
// {/*<Route path="/about" component={About}/>*/}