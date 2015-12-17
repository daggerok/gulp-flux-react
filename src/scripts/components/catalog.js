var React = require('react'),
Store = require('../stores/app'),
AddToCart = require('./addToCart'),
Catalog = React.createClass({
  getInitialState: function() {
    return getCatalog()
  },
  render: function() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.state.items.map(function(item) {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.cost}</td>
                <td><AddToCart item={item} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
})

function getCatalog() {
  return { items: Store.getCatalog() }
}

module.exports = Catalog
