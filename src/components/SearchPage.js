import React, { Component } from 'react'
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

class SearchPage extends Component {

    render() {
        console.log('SearchPage', this.props.recipes)
        return (
            // <form>
            //     <input type="text" name="searchText" />
            //     <button onClick={this.props.getResults}>Search</button>
            // </form>
            <>
                <SearchForm getResults={this.props.getResults} />
                <SearchResult recipes={this.props.recipes} />
            </>
        );
    }
}

export default SearchPage;