import React, { Component } from 'react'
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';

class FavoritePage extends Component {
    // constructor(props) {
    //     super(props),
    //     this.state={
    //         inFave:true,
    //     }
    // }
    render() {

        return (<div>
            <h1>Here is favorite page</h1>
            <button onClick={this.props.deleteAll}>Delete All</button>
            <SearchResult recipes={this.props.favorites} faveToggle={this.props.faveToggle} inFave={true} />

        </div>
        );
    }
}

export default FavoritePage;