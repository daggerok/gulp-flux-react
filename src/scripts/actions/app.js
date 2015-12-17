var Constants = require('../constants/app')
var Dispatcher = require('../dispatchers/app')

module.exports = {
  addItem: function(item) {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(id) {
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_ITEM,
      index: id
    })
  },
  increaseItem: function(id) {
    Dispatcher.handleViewAction({
      actionType: Constants.INCREASE_ITEM,
      index: id
    })
  },
  decreaseItem: function(id) {
    Dispatcher.handleViewAction({
      actionType: Constants.DECREASE_ITEM,
      index: id
    })
  }
}
