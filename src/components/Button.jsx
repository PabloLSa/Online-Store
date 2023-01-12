import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onSaveButton, testid } = this.props;
    return (
      <button
        type="button"
        onClick={ onSaveButton }
        data-testid={ testid }
      >
        Buscar
      </button>
    );
  }
}

Button.propTypes = {
  onSaveButton: PropTypes.func,
  testid: PropTypes.string,
}.isRequired;
