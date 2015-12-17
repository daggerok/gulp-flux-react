var React = require('react'),
Actions = require('../actions/app'),
RemoveFromCart = React.createClass({
  handler: function() {
    Actions.removeItem(this.props.index)
  },
  render: function() {
    return <button onClick={this.handler}>x</button>
  }
})

module.exports = RemoveFromCart
