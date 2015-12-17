var Dispatcher = require('flux').Dispatcher
var assign = require('react/lib/Object.assign')

module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    console.log('action', JSON.stringify(action))

    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})
