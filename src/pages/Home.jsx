import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Input from '../components/Input';
import RadioButon from '../components/RadioButon';
import { getCategories, getCategoryId,
  getProductsFromCategoryAndQuery } from '../services/api';
import localSet from '../services/localStorageFuncs';

export default class Home extends Component {
  state = {
    search: '',
    filtro: '',
    apiResults: [],
    categories: [],
    // cart: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    // const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ categories });
  }

  // componentDidUpdate(prevState) {
  //   const { cart } = this.state;
  //   if (prevState.cart !== cart) {
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     const cartStorage = JSON.parse(localStorage.getItem('cart'));
  //     localStorage.setItem('quantity', JSON.stringify([...cartStorage]));
  //   }
  // }

  // Função criada pra passar a logica do value dos inputes pro estado, assim pode ser utilizada no envio da props pro documento e no para renderização
  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => name === 'filtro' && this.handleCategoryId());
  };

  handleCategoryId = async () => {
    const { filtro } = this.state;
    const categoryApi = await getCategoryId(filtro);
    this.setState({ apiResults: categoryApi });
  };

  // logica que faz a renderização durante o click
  onSaveButton = async () => {
    const { search } = this.state;
    const queryApi = await getProductsFromCategoryAndQuery('', search);
    this.setState({ apiResults: queryApi.results });
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
    const { search, apiResults, categories } = this.state;
    return (
      <div>
        {apiResults.length < 1
         && (
           <span data-testid="home-initial-message">
             Digite algum termo de pesquisa ou escolha uma categoria.
           </span>
         )}

        <section>
          <Button
            buttonText="Buscar"
            onSaveButton={ this.onSaveButton }
            testid="query-button"
          />
          <Input value={ search } onInputChange={ this.onInputChange } />
        </section>

        {categories.length > 0 && categories.map((category) => (
          <RadioButon
            key={ category.id }
            id={ category.id }
            name={ category.name }
            onInputChange={ this.onInputChange }
          />
        ))}

        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>

        {
          apiResults.length > 0
            ? apiResults.map((item) => (
              <div key={ item.id }>
                <ProductCard
                  title={ item.title }
                  price={ item.price }
                  thumbnail={ item.thumbnail }
                  id={ item.id }
                />
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this
                    .addToCart(item.id, item.title, item.price, item.thumbnail) }
                >
                  Adicionar ao carrinho
                </button>
              </div>

            ))
            : (<span>Nenhum produto foi encontrado</span>)
        }

      </div>
    );
  }
}
