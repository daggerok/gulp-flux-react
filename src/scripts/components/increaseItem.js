var React = require('react'),
Actions = require('../actions/app'),
IncreaseItem = React.createClass({
  handler: function() {
    Actions.increaseItem(this.props.index)
  },
  render: function() {
      return <button onClick={this.handler}> + </button>
  }
})

module.exports = IncreaseItem
