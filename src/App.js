import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';

// import { getCategories, getProductsFromCategoryAndQuery } from './services//api';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route path="/product/:id" component={ Product } />
      </Switch>
    </div>
  );
}

export default App;
