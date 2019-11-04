import React, { Component } from 'react'
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';

class FavoritePage extends Component {
    render() {

        return (<div>
            <h1>Here is favorite page</h1>
            <SearchResult recipes={this.props.favorites} faveToggle={this.props.faveToggle} />

        </div>
        );
    }
}

export default FavoritePage;