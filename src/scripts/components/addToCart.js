var React = require('react'),
Actions = require('../actions/app'),
AddToCart = React.createClass({
  handler: function() {
    Actions.addItem(this.props.item)
  },
  render: function() {
    return <button onClick={this.handler}>Add To Cart</button>
  }
})

module.exports = AddToCart
