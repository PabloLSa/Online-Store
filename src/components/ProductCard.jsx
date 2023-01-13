import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, qty } = this.props;
    // console.log(id);
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt="product" />
        </Link>
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        {qty && <p data-testid="shopping-cart-product-quantity">{qty}</p>}
        <p>{price}</p>
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
