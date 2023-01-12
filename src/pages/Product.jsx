import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { getProductById } from '../services/api';
import sumQty from '../services/helpers';

export default class Product extends Component {
  state = {
    id: '',
    title: '',
    price: '',
    thumbnail: '',
    available: 0,
    renderQty: 0,
  };

  async componentDidMount() {
    await this.getProducts();
    const sum = await sumQty();
    this.setState({
      renderQty: sum,
    });
  }

  getProducts = async () => {
    const { match: { params: { id } } } = this.props;

    const { title, price, thumbnail,
      available_quantity: available } = await getProductById(id);

    this.setState({ title, price, thumbnail, id, available });
  };

  addToCart = async (params) => {
    const { id, title, price, thumbnail, available } = params;
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    let filteredProducts = [];
    const existsProduct = products?.some((prod) => prod.id === id);
    if (!existsProduct) {
      filteredProducts = [...products, { id,
        title,
        price,
        thumbnail,
        qty: 1,
        available }];
    } else {
      filteredProducts = products.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            qty: prod.qty < available ? prod.qty + 1 : available,
          };
        }
        return prod;
      });
    }
    const sum = sumQty(); // MLB1776349821
    this.setState({
      renderQty: sum,
    });
    localStorage.setItem('cart', JSON.stringify(filteredProducts));
  };

  render() {
    const { title, price, thumbnail, renderQty } = this.state;
    return (
      <div>
        <section>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        </section>
        <section>
          <h1 data-testid="product-detail-name">{title}</h1>
          <h4 data-testid="product-detail-price">{`R$${price}`}</h4>
        </section>
        <Button testid="shopping-cart-buttons">Buscar</Button>
        <Button
          testid="product-detail-add-to-cart"
          onSaveButton={ () => this.addToCart(this.state) }
        >
          Adicionar ao carrinho
          {' '}
          <span data-testid="shopping-cart-size">{renderQty}</span>
        </Button>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
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
