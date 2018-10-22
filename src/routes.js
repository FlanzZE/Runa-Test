import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'

import Cart from './Cart';
import Home from './Home';

const AppRoutes = ()=>{
    <BrowserRouter>
    <div>
    <Route path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    </div>
    </BrowserRouter>
}

export default AppRoutes;