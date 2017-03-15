/**
 * Created by chenyang on 17/3/1.
 */
var React = require('react');
import styles from '../../css/sc.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router';



var TodoList = React.createClass({
    getInitialState: function() {
        return {items: ['hello', 'world', 'click', 'me']};
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = TodoList;





// var secondH = React.createClass({
//     render : function(){
//         return(
//             <p>
//                 <span>你好,这里是second组件</span>
//                 <br/>
//                 <Link to="/">跳转去index组件</Link>
//             </p>
//         );
//     }
// });


// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;