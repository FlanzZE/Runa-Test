import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { loadProducts, addToCart, removeLoader } from '../actionCreators';
import loader from './../img/loading.gif'
const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.handleAddToCart = this.handleAddToCart.bind(this);

    this.state = { 
      products: [],
      loading:true 
    
    }

    store.subscribe(() => {
      this.setState({
        products: store.getState().products
      });
    });
    store.subscribe(() => {
      this.setState({
        loading: store.getState().loading
      });
    });

    setTimeout(() => {
      fetch(store.dispatch(loadProducts())).then(function(response){
     store.dispatch(removeLoader(false))
      })
      
    }, 1000);
  }

  render() {
    return (
      
      <div style={styles.products}>
      
      {(this.state.loading)?<img src={loader} alt=""/>:""}
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.thumbnail} alt={product.id} />
            <div className="caption">
              <h4>{product.title}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.handleAddToCart(product)} role="button">${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
              <Button target="_blank" href={product.permalink}>details</Button>
            </div>
          </div>
        )}
        
      </div>
    );
  }

  handleAddToCart(product) {
    store.dispatch(addToCart(product));
  }
}

export default ProductList;
