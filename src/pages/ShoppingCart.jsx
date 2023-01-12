import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
// import ListedProduct from '../components/ListedProduct';

export default class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const { location: { pathname } } = this.props;
    this.setState({ cart, pathname: pathname === '/shopincart' });
  }

  addToCart = (boll, id) => {
    // Pega os itens do localStorage
    let products = JSON.parse(localStorage.getItem('cart')) || [];

    // verifica se o id passado pelo click é igual ao item dentro do local storage
    const existsProduct = products.find((prod) => prod.id === id);

    // caso o parametro da função for igual a remove o item é removido claramente
    if (boll === 'remove') {
      products = products.filter((prod) => prod.id !== id);
    }

    // lógica que define o aumento da quantidade de itens iguais no inventario
    if (boll) {
      existsProduct.qty = existsProduct.qty < existsProduct.available ? existsProduct
        .qty += 1 : existsProduct.available;
    } else if (existsProduct.qty > 1) {
      existsProduct.qty = existsProduct
        .qty < 1 ? existsProduct.qty = 1 : existsProduct.qty -= 1;
    }

    // por fim a lógica pra definir o estado que faz a página ser atualizada e renderizar o valor atualizado, abaixo o valor sendo definido novament eno localStorage
    this.setState({ cart: products });
    localStorage.setItem('cart', JSON.stringify(products));
  };

  renderCards = (cart, pathname) => cart.map((prod, index) => (
    <ProductCard
      key={ prod.id + index }
      price={ prod.price }
      title={ prod.title }
      thumbnail={ prod.thumbnail }
      pathname={ !pathname }
      id={ prod.id }
      qty={ prod.qty }
      addtocart={ this.addToCart }
    />
  ));

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
ShoppingCart.propTypes = {
  location: PropTypes.shape = {
    pathname: PropTypes.string,
  },
}.isRequired;
