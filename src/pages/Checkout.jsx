import React, { Component } from 'react';
import BuyerInformation from '../components/BuyerInformation';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  state = {
    produto: [],
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

  render() {
    const { produto } = this.state;
    return (
      <>
        <BuyerInformation />
        <PaymentMethod />
        <button type="submit" data-testid="checkout-btn">Comprar</button>
        { produto.map((prod) => (
          <p key={ prod.title }>
            { prod.title }
          </p>
        )) }

      </>
    );
  }
}

export default Checkout;
