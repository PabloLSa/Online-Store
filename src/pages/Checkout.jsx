import React, { Component } from 'react';
import InformacoesComprador from '../components/InformacoesComprador';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  render() {
    return (
      <>
        <InformacoesComprador />
        <PaymentMethod />
        <button type="submit" data-testid="checkout-btn">Comprar</button>

      </>
    );
  }
}

export default Checkout;
