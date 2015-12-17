var React = require('react'),
Actions = require('../actions/app'),
DecreaseItem = React.createClass({
  handler: function() {
    Actions.decreaseItem(this.props.index)
  },
  render: function() {
    return <button onClick={this.handler}> - </button>
  }
})

module.exports = DecreaseItem
