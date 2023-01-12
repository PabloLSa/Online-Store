import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListedProduct extends Component {
  render() {
    const { onClick, productName, productQuantity, productValue } = this.props;
    return (
      <div>
        <button type="button" onClick={ onClick } data-testid="remove-product">X</button>
        <img src="" alt="Produto" />
        <span>{ productName }</span>
        <img src="" alt="Diminuir quantidade" data-testid="product-decrease-quantity" />
        <span>{ productQuantity }</span>
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
}.isRequired;
