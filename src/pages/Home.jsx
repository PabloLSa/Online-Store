import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategorySearch from '../components/CategorySearch';
import Input from '../components/Input';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Input />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CategorySearch />
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}
