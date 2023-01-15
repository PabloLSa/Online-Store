import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, qty, addtocart, pathname } = this.props;
    return (
      <div data-testid="product">
        {pathname
        && <Button
          buttonText="X"
          testid="remove-product"
          onSaveButton={ () => addtocart('remove', id) }
        />}
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt="product" />
        </Link>
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        {pathname && (
          <div>
            <Button
              condition
              buttonText="+"
              testid="product-increase-quantity"
              onSaveButton={ () => addtocart(true, id) }
            />
            <p data-testid="shopping-cart-product-quantity">{qty}</p>
            <Button
              buttonText="-"
              testid="product-decrease-quantity"
              onSaveButton={ () => addtocart(false, id) }
            />
          </div>
        )}
        <p>{pathname ? `R$${price * qty}` : `R$${price}`}</p>
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
  addtocart: PropTypes.func,
}.isRequired;
