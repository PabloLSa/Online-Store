import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ListedProduct extends Component {
  render() {
    const { onClick, productName, productQuantity,
      productValue, productThumbnail } = this.props;
    const maxString = 70;
    return (
      <div style={ { display: 'flex', justifyContent: 'space-between' } }>
        <Button buttonText="X" testid="remove-product" onClick={ onClick } />
        <img src={ productThumbnail } alt="Produto" />
        <span data-testid="shopping-cart-product-name">
          { productName.substring(0, maxString) }
        </span>
        <img src="" alt="Diminuir quantidade" data-testid="product-decrease-quantity" />
        <span data-testid="shopping-cart-product-quantity">{ productQuantity }</span>
        <img src="" alt="Aumentar quantidade" data-testid="product-increase-quantity" />
        <span>{ `R$ ${productValue}` }</span>
      </div>
    );
  }
}

ListedProduct.propTypes = {
  onClick: PropTypes.func,
  productName: PropTypes.string,
  productQuantity: PropTypes.string,
  productValue: PropTypes.string,
  productThumbnail: PropTypes.string,
}.isRequired;
