import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { SelectEstade } from './SelectEstade';
import SelectEstade from './SelectEstade';

class InformacoesComprador extends Component {
  render() {
    const { handleChange, valid } = this.props;
    return (
      <fieldset>
        {valid && <span data-testid="error-msg">Campos inválidos</span>}
        <legend>Informaçõs do Comprador</legend>
        <label htmlFor="nome-completo">
          <input
            type="text"
            placeholder="Nome Completo"
            name="fullname"
            data-testid="checkout-fullname"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cpf">
          <input
            name="cpf"
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="telefone">
          <input
            type="text"
            placeholder="Telefone"
            name="phone"
            data-testid="checkout-phone"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cep">
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            data-testid="checkout-cep"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="endereço">
          <input
            type="text"
            name="address"
            placeholder="Endereço"
            data-testid="checkout-address"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="complemento">
          <input type="text" placeholder="Complemento" name="complement" />
        </label>
        <label htmlFor="número">
          <input type="number" placeholder="Número" name="housenumber" />
        </label>
        <label htmlFor="cidade">
          <input type="text" placeholder="Cidade" name="city" />
        </label>
        <SelectEstade />
      </fieldset>
    );
  }
}

InformacoesComprador.propTypes = {
  valid: PropTypes.bool,
  handleChange: PropTypes.func,
}.isRequired;

export default InformacoesComprador;
