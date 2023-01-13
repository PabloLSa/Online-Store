import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onSaveButton, testid, buttonText, children, condition } = this.props;
    return (
      <button
        type={ !condition ? 'button' : 'submit' }
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
  condition: PropTypes.bool,
}.isRequired;
