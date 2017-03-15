/**
 * Created by chenyang on 17/3/9.
 */
var React = require("react");
var ReactDOM = require("react-dom");
import "../../css/header.css"

var Header = React.createClass({
    render : function(){
        return(
            <header className="header">
                <div className="nav-left">
                    <a className="react" href="javascript:;">
                        <span className="nav-city">
                            重庆
                            <i className="icon-down">&#xe607;</i>
                        </span>
                    </a>
                </div>

                <div className="box-search">
                    <a className="react" href="javascript:;">
                        <i className="icon-search">&#xe634;</i>
                        <span className="single-line">
                            输入商家/品类/商圈
                        </span>
                    </a>
                </div>

                <div className="nav-wrap-right">
                    <a className="react" href="javascript:;">
                        <span className="nav-btn">
                        <i className="icon-my">&#xe618;</i>
                        我的
                         </span>
                    </a>
                </div>
            </header>
        );
    }
});

module.exports = Header;