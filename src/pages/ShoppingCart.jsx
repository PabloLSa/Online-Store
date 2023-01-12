import React, { Component } from 'react';
import ListedProduct from '../components/ListedProduct';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div
        data-testid="shopping-cart-empty-message"
      >
        {/* { localStorage.getItem() } */}
        <ListedProduct
          key={ product.id }
          onClick={ onClick }
          productName={ product.name }
          productQuantity={ product.quantity }
        />
        Seu carrinho está vazio
      </div>
    );
  }
}
