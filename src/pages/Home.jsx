import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CategorySearch from '../components/CategorySearch';
import Input from '../components/Input';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    search: '',
    apiResults: [],
    // categories: [],
  };

  onInputChange = ({ target }) => {
    const search = target.value;
    this.setState({ search });
  };

  onSaveButton = async () => {
    const { search } = this.state;
    const queryApi = await getProductsFromCategoryAndQuery('', search);
    this.setState({ apiResults: queryApi.results });
  };

  render() {
    const { search, apiResults } = this.state;
    return (
      <div>
        {apiResults.length < 1
         && (
           <span data-testid="home-initial-message">
             Digite algum termo de pesquisa ou escolha uma categoria.
           </span>
         )}

        <section>
          <Button onSaveButton={ this.onSaveButton } />
          <Input value={ search } onInputChange={ this.onInputChange } />
        </section>
        <CategorySearch />
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>

        {apiResults.length > 0 ? (
          apiResults.map((item) => (
            <p key={ item.id } data-testid="product">{item.title}</p>
          ))
        ) : (
          <span>Nenhum produto foi encontrado</span>
        )}

      </div>
    );
  }
}
