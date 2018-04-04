import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component  {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }
    static propTypes = {
        onSearchTermChange: PropTypes.func.isRequired
    };
    render(){
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar