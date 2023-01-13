import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    id: '',
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
    // console.log(data);
    this.setState({ title, price, thumbnail, id });
  };

  addToCart = (id, title, price, thumbnail) => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    let filteredProducts = [];
    const existsProduct = products?.some((prod) => prod.id === id);
    if (!existsProduct) {
      filteredProducts = [...products, { id, title, price, thumbnail, qty: 1 }];
    } else {
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
    const { id, title, price, thumbnail } = this.state;
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
          onSaveButton={ () => this.addToCart(id, title, price, thumbnail) }
        >
          Adicionar ao carrinho
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
