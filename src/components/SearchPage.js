import React, { Component } from 'react'

class SearchPage extends Component {

    render() {
        return (
            <form>
                <input type="text" name="searchText" />
                <button onClick={this.props.getResults}>Search</button>
            </form>
        );
    }
}

export default SearchPage;