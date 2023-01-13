import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class ProductCard extends Component {
  addToCartTwo = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  };

  addToCart = (id) => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    let filteredProducts = [];
    const existsProduct = products?.some((prod) => prod.id === id);
    if (existsProduct) {
      filteredProducts = products.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        }
        return prod;
      });
    }
    localStorage.setItem('cart', JSON.stringify(filteredProducts));
  };

  render() {
    const { title, thumbnail, price, id, qty } = this.props;
    return (
      <div data-testid="product">
        {qty && <Button buttonText="X" testid="remove-product" />}
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt="product" />
        </Link>
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        {qty && (
          <div>
            <Button
              condition
              buttonText="+"
              testid="product-increase-quantity"
              onSaveButton={ () => this.addToCart(id) }
            />
            <p data-testid="shopping-cart-product-quantity">{qty}</p>
            <Button
              buttonText="-"
              testid="product-decrease-quantity"
            />
          </div>
        )}
        <p>{`R$${price * qty}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  qty: PropTypes.number,
}.isRequired;
