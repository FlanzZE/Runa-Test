import React, { Component } from 'react';
import { Navbar, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import ListaProductos from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.scss';

class Cart extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><Glyphicon glyph="home" /> Regresar</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={12}>
              <ListaProductos />
            </Col>
            <Col sm={3} className="shop">
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Cart;
