import React, { Component } from 'react'
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

class SearchPage extends Component {

    render() {
        return (
            // <form>
            //     <input type="text" name="searchText" />
            //     <button onClick={this.props.getResults}>Search</button>
            // </form>
            <>
                <SearchForm getResults={this.props.getResults} />
                <SearchResult />
            </>
        );
    }
}

export default SearchPage;