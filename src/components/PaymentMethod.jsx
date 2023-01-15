import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PaymentMethod extends Component { // componente métofo de pagamento
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Método de Pagmento</legend>
        <p>
          Boleto
          <input
            name="payment"
            type="radio"
            data-testid="ticket-payment"
            value="boleto"
            onClick={ handleChange }
          />
        </p>
        <p>
          Cartão de Cŕedito
          <input
            name="payment"
            type="radio"
            data-testid="visa-payment"
            value="visa"
            onClick={ handleChange }
          />
          <input
            name="payment"
            type="radio"
            data-testid="master-payment"
            value="master"
            onClick={ handleChange }
          />
          <input
            name="payment"
            type="radio"
            data-testid="elo-payment"
            value="elo"
            onClick={ handleChange }
          />
        </p>

      </fieldset>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PaymentMethod;
