import React, { Component } from 'react';
import { SelectEstade } from './SelectEstade';

class BuyerInformation extends Component {
  handleChange = (target) => {

  }; // componnte das informações do comprador

  render() {
    return (
      <fieldset>
        <legend>Informaçõs do Comprador</legend>
        <label htmlFor="nome-completo">
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="cpf">
          <input
            type="number"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Email"
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="telefone">
          <input
            type="number"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="cep">
          <input
            type="number"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
        </label>
        <label htmlFor="endereço">
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
        </label>
        <label htmlFor="complemento">
          <input
            type="text"
            placeholder="Complemento"
          />
        </label>
        <label htmlFor="número">
          <input
            type="text"
            placeholder="Número"
          />
        </label>
        <label htmlFor="cidade">
          <input
            type="text"
            placeholder="Cidade"
          />
        </label>
        <SelectEstade />
      </fieldset>
    );
  }
}

export default BuyerInformation;
