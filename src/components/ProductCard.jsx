import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    // console.log(id);
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt="product" />
        </Link>
        <h4>{title}</h4>
        <p>{`R$${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
