import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import ProductCard from '../components/ProductCard';
import RadioButon from '../components/RadioButon';
import { getCategories, getCategoryId,
  getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    search: '',
    filtro: '',
    apiResults: [],
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

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

        {apiResults.length > 0 ? (
          apiResults.map(({ id, title, price, thumbnail }) => (
            <ProductCard
              key={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
              id={ id }
            />
          ))
        ) : (
          <span>Nenhum produto foi encontrado</span>
        )}

      </div>
    );
  }
}
