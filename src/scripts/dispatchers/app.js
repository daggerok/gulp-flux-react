var FluxDispatcher = require('flux').Dispatcher,
assign = require('react/lib/Object.assign'),
Dispatcher = assign(new FluxDispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

module.exports = Dispatcher
