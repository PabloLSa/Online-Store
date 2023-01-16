import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { getProductById } from '../services/api';
import Evaluation from '../components/Evaluation';
import sumQty from '../services/helpers';

export default class Product extends Component {
  state = {
    id: '',
    title: '',
    price: '',
    thumbnail: '',
    email: '',
    rating: '',
    text: '',
    invalidtSubmit: false,
    evaluation: [],
    available: 0,
    renderQty: 0,
  };

  async componentDidMount() {
    await this.products();
    this.Evaluations();
    const sum = await sumQty();
    this.setState({
      renderQty: sum,
    });
  }

  products = async () => {
    const { match: { params: { id } } } = this.props;

    const { title, price, thumbnail,
      available_quantity: available } = await getProductById(id);

    this.setState({ title,
      price,
      thumbnail,
      id,
      available,
      email: '',
      rating: 0,
      invalidtSubmit: false });
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

  Evaluations = () => {
    const { match: { params: { id } } } = this.props;
    const evaluation = JSON.parse(localStorage.getItem(id));
    if (evaluation) {
      this.setState({
        evaluation,
      });
    } else {
      this.setState({
        evaluation: [],
      });
    }
  };

  handleFields = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleButton = (event) => {
    event.preventDefault();
    const { match: { params: { id } } } = this.props;
    const { email, rating, text } = this.state;
    if (email.includes('@') && rating !== 0) {
      const currentAvaliation = [{
        email,
        text,
        rating,
      }];
      this.setState((prevState) => ({
        invalidtSubmit: false,
        evaluation: prevState + currentAvaliation,
      }));
      const evaluation = JSON.parse(localStorage.getItem(id));
      if (evaluation) {
        evaluation.push(currentAvaliation[0]);
        localStorage.setItem(id, JSON.stringify(evaluation));
        this.setState({
          email: '',
          text: '',
        });
      } else {
        localStorage.setItem(id, JSON.stringify(currentAvaliation));
        this.setState({
          email: '',
          text: '',
        });
      }
    } else {
      this.setState({
        invalidtSubmit: true,
      });
    }
    this.Evaluations();
  };

  render() {
    const { title, price, thumbnail, email, text,
      invalidtSubmit, evaluation, renderQty } = this.state;
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
        <Evaluation
          handleFields={ this.handleFields }
          email={ email }
          text={ text }
          handleButton={ this.handleButton }
          invalidtSubmit={ invalidtSubmit }
        />
        <h1>Avaliações:</h1>
        {(evaluation.length < 1) ? <p>Nenhuma avaliação foi encontrada</p>
          : (
            evaluation.map((eva, index) => (
              <div key={ index }>
                <h2 data-testid="review-card-rating">
                  { `${eva.rating} Estrelas` }
                </h2>
                <h4 data-testid="review-card-email">
                  { eva.email }
                </h4>
                <span data-testid="review-card-evaluation">
                  { eva.text }
                </span>
                <hr />
              </div>
            )))}
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
