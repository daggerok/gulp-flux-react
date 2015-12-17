var React = require('react'),
Store = require('../stores/app'),
RemoveFromCart = require('./removeFromCart'),
IncreaseItem = require('./increaseItem'),
DecreaseItem = require('./decreaseItem'),
Catalog = React.createClass({
  getInitialState: function() {
    return cartItems()
  },
  componentWillMount: function() {
    Store.addChangeListener(this._onChange)
  },
  _onChange: function() {
    this.setState(cartItems())
  },
  render: function() {
    var total = 0
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(function(item, index) {
            var subTotal = item.cost * item.qty
            total += subTotal
            return (
              <tr key={index}>
                <td><RemoveFromCart index={index} /></td>
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>
                  <IncreaseItem index={index} />
                  <DecreaseItem index={index} />
                </td>
                <td>${subTotal}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-rigth">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
})

function cartItems() {
  return { items: Store.getCart() }
}

module.exports = Catalog
