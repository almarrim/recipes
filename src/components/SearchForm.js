import React from 'react'

const SearchForm = (props) => {
    return <form>
        <input type="text" name="searchText" />
        <button onClick={props.getResults}>Search</button>
    </form>
}
export default SearchForm;