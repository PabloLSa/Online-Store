import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onSaveButton, testid, buttonText, children } = this.props;
    return (
      <button
        type="button"
        onClick={ onSaveButton }
        data-testid={ testid }
      >
        { children }
        { buttonText }
      </button>
    );
  }
}

Button.propTypes = {
  onSaveButton: PropTypes.func,
  testid: PropTypes.string,
  children: PropTypes.string,
  buttonText: PropTypes.string,
}.isRequired;
