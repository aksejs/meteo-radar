import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    onInputChange = ({ target: { value } }) => {
      this.setState({ term: value });
    };

    onFormSubmit = (e) => {
      e.preventDefault();
      const { term } = this.state;
      this.props.fetchWeather(term);
      this.setState({ term: '' });
    };

    render() {
      return (
        <div className="search-bar">
          <div className="field has-addons">
            <div className="control" onSubmit={this.onFormSubmit}>
              <input
                className="input"
                type="text"
                name="city"
                placeholder="Miami..."
                onChange={this.onInputChange}
              />
            </div>
            <div className="control">
              <a
                className="button is-info"
                onClick={this.onFormSubmit}
              >
                    Add city
              </a>
            </div>
          </div>
        </div>
      );
    }
}


export default connect(null, { fetchWeather })(SearchWeather);
