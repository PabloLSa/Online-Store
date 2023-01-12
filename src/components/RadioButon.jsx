import React, { Component } from 'react';
import { getCategories } from '../services/api';

class RadioButon extends Component {
  state = {
    categorie: [],
  };

  async componentDidMount() {
    const categorie = await getCategories();
    this.setState({
      categorie,
    });
  }

  render() {
    const { categorie } = this.state;
    return (
      <div>
        { categorie.map((categories) => (
          <label
            key={ categories.id }
            htmlFor={ categories.id }
            data-testid="category"
          >
            {categories.name}
            <input
              type="radio"
              name="category"
              id={ categories.id }
              value={ categories.id }
            />
          </label>
        )) }

      </div>
    );
  }
}

export default RadioButon;
