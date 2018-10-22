import React, { Component } from "react";
import { Panel, Table, Button, Glyphicon } from "react-bootstrap";
import store from "../store";
import { removeFromCart } from "../actionCreators";
import "./../shopping.scss";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.state = {
      cart: []
    };
    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
      <Panel header="Productos agregados">
        <Table fill>
          <tbody>
            {this.state.cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.thumbnail} alt="" />
                  {product.title}
                </td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">
                  <Button
                    bsSize="xsmall"
                    bsStyle="danger"
                    onClick={() => this.handleRemoveFromCart(product)}
                  >
                    <Glyphicon glyph="trash" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                Total: $
                {this.state.cart.reduce(
                  (sum, product) => sum + product.price,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </Panel>
    );
  }

  handleRemoveFromCart(product) {
    store.dispatch(removeFromCart(product));
  }
}

export default ShoppingCart;
