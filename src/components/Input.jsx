import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <input
        type="text"
        data-testid="query-input"
        id="search"
        name="search"
        value={ value }
        onChange={ onInputChange }
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;
