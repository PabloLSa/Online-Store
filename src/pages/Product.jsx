import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    title: '',
    price: '',
    thumbnail: '',
  };

  async componentDidMount() {
    await this.getProducts();
  }

  getProducts = async () => {
    const { match: { params: { id } } } = this.props;

    const { title, price, thumbnail } = await getProductById(id);
    console.log(title, price, thumbnail);
    this.setState({ title, price, thumbnail });
  };

  render() {
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <section>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        </section>
        <section>
          <h1 data-testid="product-detail-name">{title}</h1>
          <h4 data-testid="product-detail-price">{`R$${price}`}</h4>
        </section>
        <Button buttonText="Adcionar ao carrinho" testid="shopping-cart-buttons" />
      </div>
    );
  }
}
Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
