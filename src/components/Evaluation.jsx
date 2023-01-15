import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Evaluation extends Component {
  render() {
    const { handleFields, email, text, handleButton, invalidtSubmit } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            <input
              type="text"
              name="email"
              id="email-input"
              data-testid="product-detail-email"
              placeholder="Email"
              onChange={ handleFields }
              value={ email }
              required
            />
          </label>
          <input
            type="radio"
            id="ev1"
            name="rating"
            value="1"
            data-testid="1-rating"
            onChange={ handleFields }
            required
          />
          <input
            type="radio"
            id="ev2"
            name="rating"
            value="2"
            data-testid="2-rating"
            onChange={ handleFields }
            required
          />
          <input
            type="radio"
            id="ev3"
            name="rating"
            value="3"
            data-testid="3-rating"
            onChange={ handleFields }
            required
          />
          <input
            type="radio"
            id="ev4"
            name="rating"
            value="4"
            data-testid="4-rating"
            onChange={ handleFields }
            required
          />
          <input
            type="radio"
            id="ev5"
            name="rating"
            value="5"
            data-testid="5-rating"
            onChange={ handleFields }
            required
          />
          <label htmlFor="review">
            <textarea
              name="text"
              id="review"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opcional)"
              onChange={ handleFields }
              value={ text }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ handleButton }
          >
            Avaliar
          </button>
          {invalidtSubmit ? <h1 data-testid="error-msg">Campos inválidos</h1> : ''}
        </form>
      </div>
    );
  }
}

Evaluation.propTypes = {
  handleFields: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  invalidtSubmit: PropTypes.bool.isRequired,
};
