import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import dotenv from 'dotenv';
// import axios from 'axios';
import hits from './hits'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FavoritePage from './components/FavoritePage';

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
    if (favorites.includes(e)) {
      favorites.splice(favorites.indexOf(e), 1)
      console.log(`${e.recipe.label} has been removed from your favorite`)
    }
    else {
      favorites.push(e)
      console.log(`${e.recipe.label} has been added to your favorite`)
    }

    this.setState({
      favorites: favorites
    })
  }
  deleteAll = () => {
    console.log('yoyoyo')
    this.setState({
      favorites: []
    })
  }
  render() {
    return (
      // <>
      //   <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} />
      //   <FavoritePage favorites={this.state.favorites} faveToggle={this.faveToggle} />
      // </>

      <Router>
        <nav>
          <Link to='/'>search</Link>{' | '}
          <Link to='/mylist'>thelist</Link>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} />} />
          <Route path='/mylist' render={() => <FavoritePage favorites={this.state.favorites} faveToggle={this.faveToggle} deleteAll={this.deleteAll} />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
