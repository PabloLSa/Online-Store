import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
<<<<<<< HEAD
    const { onSaveButton, testid, buttonText, children } = this.props;
=======
    const { onSaveButton, testid } = this.props;
>>>>>>> c13e84b (concluido requisito 07 implementada logica para redirecionamento da pagina do produto)
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
<<<<<<< HEAD
  children: PropTypes.string,
  buttonText: PropTypes.string,
=======
>>>>>>> c13e84b (concluido requisito 07 implementada logica para redirecionamento da pagina do produto)
}.isRequired;
