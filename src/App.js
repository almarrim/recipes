import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import dotenv from 'dotenv';
// import axios from 'axios';
import hits from './hits'

dotenv.config();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  getResults = (e) => {
    e.preventDefault()
    // const apiURL = `http://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDMAME_API_ID}&ap_key=${process.env.REACT_APP_EDMAME_API_KE}&from=0&to=5`
    // axios({
    //   method: 'get',
    //   url: apiURL
    // })
    //   .then(res => {
    this.setState({
      // recipes: res.data.hits,
      recipes: hits,
    })
    //     })
    //     .catch(console.error())

  }
  faveToggle = (e) => {
    const favorites = [...this.state.favorites]
    if (favorites.includes(e.recipe)) {
      favorites.splice(favorites.indexOf(e.recipe), 1)
    }
    else {
      favorites.push(e.recipe)
    }

    this.setState({
      favorites: favorites
    })
  }
  render() {
    console.log(this.state.favorites)
    return (
      <>
        <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} />

      </>
    );
  }
}

export default App;
