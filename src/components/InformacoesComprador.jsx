import React, { Component } from 'react';
import SelectEstade from './SelectEstade';

class InformacoesComprador extends Component {
  render() {
    return (
      <fieldset>
        <legend>Informaçõs do Comprador</legend>
        <label htmlFor="nome-completo">
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            required
          />
        </label>
        <label htmlFor="cpf">
          <input
            type="number"
            placeholder="CPF"
            data-testid="checkout-cpf"
            required
          />
        </label>
        <label htmlFor="email">
          <input type="text" placeholder="Email" data-testid="checkout-email" required />
        </label>
        <label htmlFor="telefone">
          <input
            type="number"
            placeholder="Telefone"
            data-testid="checkout-phone"
            required
          />
        </label>
        <label htmlFor="cep">
          <input
            type="number"
            placeholder="CEP"
            data-testid="checkout-cep"
            required
          />
        </label>
        <label htmlFor="endereço">
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            required
          />
        </label>
        <label htmlFor="complemento">
          <input type="text" placeholder="Complemento" required />
        </label>
        <label htmlFor="número">
          <input type="text" placeholder="Número" required />
        </label>
        <label htmlFor="cidade">
          <input type="text" placeholder="Cidade" required />
        </label>
        <SelectEstade />
      </fieldset>
    );
  }
}

export default InformacoesComprador;
