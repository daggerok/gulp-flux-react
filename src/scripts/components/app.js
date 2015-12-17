var React = require('react')
var Actions = require('../actions/app')

module.exports = React.createClass({
    handler: function() {
      Actions.addItem('this is an item')
    },
    render: function() {
        return <div onClick={this.handler}>Hi</div>
    }
})
