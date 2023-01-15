import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuyerInformation from '../components/BuyerInformation';
import PaymentMethod from '../components/PaymentMethod';
import ProductCard from '../components/ProductCard';

class Checkout extends Component {
  state = {
    produto: [],
    fullname: '',
    cpf: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    valid: false,
    payment: '',
  };

  componentDidMount() {
    this.produtosCarrinho();
  }

  produtosCarrinho = () => {
    const produtos = JSON.parse(localStorage.getItem('cart')); // resumo dos produtos adicionados
    this.setState({
      produto: produtos,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  inputVerify = () => {
    const { fullname, cpf, email, phone,
      cep, address, payment } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const eleven = (cpf && phone).length > 1;
    const emailValid = regex.test(email);
    const cepValid = cep.length > 1;
    const texts = (fullname && address && payment).length > 1;

    const boll = eleven && emailValid && cepValid && texts;

    return boll;
  };

  storageClear = () => {
    const { history } = this.props;
    const validation = this.inputVerify();

    if (validation) {
      localStorage.setItem('cart', JSON.stringify([]));
      this.setState({ valid: false });
      history.push('/');
    } else { this.setState({ valid: true }); }
  };

  render() {
    const { produto, valid } = this.state;
    return (
      <div data-testid="checkout-products">
        <BuyerInformation
          valid={ valid }
          handleChange={ this.handleChange }

        />
        <PaymentMethod handleChange={ this.handleChange } />

        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ this.storageClear }
        >
          Comprar

        </button>

        { produto.map((prod) => (
          <ProductCard
            id={ prod.id }
            key={ prod.id }
            title={ prod.title }
            price={ prod.price }
            thumbnail={ prod.thumbnail }
          />

        )) }

      </div>
    );
  }
}
Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
