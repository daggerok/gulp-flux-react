var React = require('react'),
Catalog = require('../components/catalog'),
Cart = require('../components/cart'),
App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Catalog</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />

      </div>
    )
  }
})

module.exports = App
