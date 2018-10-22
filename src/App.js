import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./Home";
import Cart from "./Cart";
import E404 from './E404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
            <Route component={E404}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 