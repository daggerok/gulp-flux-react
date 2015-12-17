var _catalog = [], _cartItems = [], CHANGE_EVENT = 'change',
assign = require('react/lib/Object.assign'), size = 3,
EventEmitter = require('events').EventEmitter,
Dispatcher = require('../dispatchers/app'),
Constants = require('../constants/app'),
Store = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  },
  getCart: function() {
    return _cartItems
  },
  getCatalog: function() {
    return _catalog
  },
  getCartTotals: function() {
    return _cartTotals()
  },
  dispatcherIndex: Dispatcher.register(function(payload) {
    var action = payload.action    
    switch(action.actionType) {
      case Constants.ADD_ITEM:
        _addItem(action.item)
        break
      case Constants.REMOVE_ITEM:
        _removeItem(action.index)
        break
      case Constants.INCREASE_ITEM:
        _increaseItem(action.index)
        break
      case Constants.DECREASE_ITEM:
        _decreaseItem(action.index)
        break
    }
    
    Store.emitChange()
    
    return true
  })
})

for (var i = 1; i <= size; i++) {
  _catalog.push({
    'id': 'widget' + i,
    'title': 'Widget #' + i,
    'summary': 'this is a widget',
    'description': 'Some description ' + i,
    'cost': i
  })
}

function _removeItem(index) {
  _cartItems[index].inCart = false
  _cartItems.splice(index, 1)
}

function _increaseItem(index) {
  _cartItems[index].qty++
}

function _decreaseItem(index) {
  if (_cartItems[index].qty > 1) {
    _cartItems[index].qty--
  } else {
    _removeItem(index)
  }
}

function _addItem(item) {
  if (!item.inCart) {
    item['qty'] = 1
    item['inCart'] = true
    _cartItems.push(item)
  } else {
    _cartItems.forEach(function(el, index) {
      if (el.id === item.id) {
        _increaseItem(index)
      }
    })
  }
}

function _cartTotals() {
  var qty = 0, total = 0
  _cartItems.forEach(function(el, index) {
    qty += el.qty
    total += el.qty + el.cost
  })
  return {
    'qty': qty,
    'total': total
  }
}

module.exports = Store
