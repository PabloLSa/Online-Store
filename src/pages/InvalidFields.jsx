import React, { Component } from 'react';

class InvalidFields extends Component {
  render() {
    return (
      <p data-testid="error-msg">
        Campos inválidos
      </p>
    );
  }
}

export default InvalidFields;
