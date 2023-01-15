import React, { Component } from 'react';

export default class SelectEstade extends Component { // crianndo option do estado de endereço do comprador
  state = {
    estado: [],
  };

  criandoEstado = async () => {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
    const response = await request.json();
    this.setState({
      estado: response,
    });
  };

  render() {
    const { estado } = this.state;
    return (
      <select onClick={ this.criandoEstado }>
        <option value="id" disabled selected>Estado</option>
        {
          estado.map((state) => (
            <option value={ state.sigla } key={ state.sigla }>
              { state.sigla }
            </option>
          ))
        }
      </select>
    );
  }
}
