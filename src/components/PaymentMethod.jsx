import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    return (
      <fieldset>
        <legend>Método de Pagmento</legend>
        <p>
          Boleto
          <input name="payment" type="radio" data-testid="ticket-payment" required />
        </p>
        <p>
          Cartão de Cŕedito
          <input name="payment" type="radio" data-testid="visa-payment" />
          <input name="payment" type="radio" data-testid="master-payment" />
          <input name="payment" type="radio" data-testid="elo-payment" />
        </p>

      </fieldset>
    );
  }
}

export default PaymentMethod;
