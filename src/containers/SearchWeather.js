import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();
    
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }
    render() {
        return(
        <form onSubmit={this.onFormSubmit}>
            <input type='text' 
                   name='city' 
                   placeholder='City..' 
                   onChange={this.onInputChange}/>
            <button type='submit'>Add!</button>
        </form>)
    }   
}


export default connect(null, {fetchWeather})(SearchWeather);