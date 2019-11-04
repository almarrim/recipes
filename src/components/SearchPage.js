import React, { Component } from 'react'
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

class SearchPage extends Component {

    render() {
        console.log('SearchPage', this.props.recipes)
        return (
            <>
                <SearchForm getResults={this.props.getResults} />
                <SearchResult recipes={this.props.recipes} faveToggle={this.props.faveToggle} />
            </>
        );
    }
}

export default SearchPage;