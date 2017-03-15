/**
 * Created by chenyang on 17/3/1.
 */
var React = require("react");
var ReactDOM = require("react-dom");
import { Link } from 'react-router';

    var Hello = React.createClass({
        getInitialState: function() {
            return {date: "111-11-11"};
        },
        componentDidMount : function () {
            this.timer = setInterval(function () {
                this.setState({
                    date: new Date().toString()
                });
            }.bind(this), 1000);
        },
        componentWillUnmount: function() {
            this.timer && clearTimeout(this.timer);
        },
        render : function(){
            return(
                <p>
                    <span>你好,这里是index组件,现在的时间是{this.state.date}</span>
                    <br/>
                    <Link to="/second">跳转去second组件</Link>
                </p>
            );
        }
    });




module.exports = Hello;

