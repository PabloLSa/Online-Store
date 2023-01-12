import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onSaveButton } = this.props;
    return (
      <button
        type="button"
        onClick={ onSaveButton }
        data-testid="query-button"
      >
        Buscar
      </button>
    );
  }
}

Button.propTypes = {
  onSaveButton: PropTypes.func,
}.isRequired;
