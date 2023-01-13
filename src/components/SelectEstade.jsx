import React, { Component } from 'react';

class SelectEstade extends Component {
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

export default SelectEstade;
