import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

// import { getCategories, getProductsFromCategoryAndQuery } from './services//api';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/product/:id" component={ Product } />
        <Route exact path="/Checkout" component={ Checkout } />
        <Route path="/product/:id" component={ Product } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </div>
  );
}

export default App;
