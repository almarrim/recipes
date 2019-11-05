import React, { Component } from 'react'
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

class SearchPage extends Component {

    render() {
        return (
            <>
                <SearchForm getResults={this.props.getResults} />
                <SearchResult recipes={this.props.recipes} faveToggle={this.props.faveToggle} inFave={false} favorites={this.props.favorites} />
            </>
        );
    }
}

export default SearchPage;