import React, { Component } from 'react';
import ListedProduct from '../components/ListedProduct';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div
        data-testid="shopping-cart-empty-message"
      >
        <ListedProduct />
        Seu carrinho está vazio

      </div>
    );
  }
}
