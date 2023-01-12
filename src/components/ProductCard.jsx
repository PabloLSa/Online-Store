import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Button from './Button';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, qty, addtocart, pathname,
      shipping: { free_shipping: freeshipping = false } = {} } = this.props; // {} nos shipping resolve problema de retorno undefined
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
        <h4 data-testid="shopping-cart-product-name">
          {title}
        </h4>
        {freeshipping && <span data-testid="free-shipping">frete gratis</span>}
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
=======

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    console.log(id);
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt="product" />
        </Link>
        <h4>{title}</h4>
        <p>{price}</p>
>>>>>>> c13e84b (concluido requisito 07 implementada logica para redirecionamento da pagina do produto)
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
<<<<<<< HEAD
  qty: PropTypes.number,
  shipping: PropTypes.bool,
  addtocart: PropTypes.func,
=======
>>>>>>> c13e84b (concluido requisito 07 implementada logica para redirecionamento da pagina do produto)
}.isRequired;
