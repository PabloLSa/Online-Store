import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { getCategories } from '../services/api';

class RadioButon extends Component {
  // state = {
  //   categorie: [],
  // };

  render() {
    const { id, name, onInputChange } = this.props;
    return (
      <label
        htmlFor={ id }
        data-testid="category"
      >
        {name}
        <input
          onChange={ onInputChange }
          type="radio"
          name="filtro"
          id={ id }
          value={ id }
        />
      </label>
    );
  }
}

RadioButon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  handleCategoryId: PropTypes.func,
}.isRequired;

export default RadioButon;
