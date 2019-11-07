/*
Recipe (App): Recipes is an app that generates cooking recipes based on a food item searched by the user. Recipes can be added to a list, marked as new/old and notes can be added to recipe cards in the list. You can visit the app here =>(https://almarrim.github.io/recipes/)
for how to use it checkout the instructions in the README.md file.
Created by: Mohammed Almarri
*/


import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import dotenv from 'dotenv';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FavoritePage from './components/FavoritePage';
import Star from './components/Star';
dotenv.config();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [], //this is the state that carries all the recipes to the search result page and downward to child-components.
      favorites: [],//this is the state that carries the selected recipes to the favorite page and downward.
      noteObject: {},//this is an object the consists of recipe name as a key and the text note as a value. it is uesd to prevent notes from being lost when going to other pages in the app
      noteValue: '',
      noteBox: '',
      oldOnes: [],
      searchBox: ''
    };
  }

  getResults = (item) => {
    const apiURL = `http://api.edamam.com/search?q=${item}&app_id=${process.env.REACT_APP_EDMAME_API_ID}&ap_key=${process.env.REACT_APP_EDMAME_API_KE}&from=0&to=20`
    axios({
      method: 'get',
      url: apiURL
    })
      .then(res => {
        this.setState({
          recipes: res.data.hits,
          searchBox: ''
          // recipes: hits,
        })
      })
      .catch(console.error())

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
    this.setState({
      favorites: []
    })
  }
  getText = (e, label, noteBox) => {
    e.preventDefault()
    console.log('this is e ', e)
    console.log('getText', noteBox)
    console.log("this label", label);

    const noteObject = this.state.noteObject;
    noteObject[label] = noteBox;
    this.setState({
      noteValue: noteBox,
      noteBox: '',
      noteObject: noteObject
    })

  }
  deleteIt = () => {
    console.log('deleteIt')
    this.setState({
      noteValue: '',
    })
  };
  handleSearchChange = (e) => {
    this.setState({ searchBox: e.target.value })
  }
  handleChange = (e) => {
    console.log('handleChange')
    // this.setState({ noteBox: e.target.value })

  }
  resetNew = () => {
    this.setState({
      starsObject: {},
    })
  }
  setStars = (index, label) => {
    const starsObject = { ...this.state.starsObject };
    starsObject[label] = index;
    this.setState({
      starsObject: starsObject
    })
  }
  makeStars = () => {
    console.log(this.props.starsObject)
    const allStars = []
    for (let i = 0; i < 5; i++) {
      if (i <= this.state.starred)
        allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star checked"} />)
      else {
        allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star"} />)

      }
    }

    allStars.push(<button onClick={() => this.resetThis(0, this.props.label)}>Reset</button>)

    this.setState({
      allStars: allStars
    })
  }
  resetThis = (index, label) => {
    console.log('this is this')
    this.setStars(index, label)
    this.setState({
      starred: 0
    })
    this.makeStars()
  }
  addStars = (index, label) => {
    const allStars = []
    for (let i = 0; i < 5; i++) {
      allStars.push(<Star label={label} key={i} index={i} addStars={this.addStars} startStatus={"fa fa-star"} />)
    }
    for (let i = 0; i <= index; i++) {
      console.log('allaslsjflaksdjf', i)

      allStars[i] = <Star label={label} key={i} index={i} addStars={this.addStars} startStatus={"fa fa-star checked"} />

    }
    allStars.push(<button onClick={() => this.props.resetThis(0, this.props.label)}>Reset</button>)
    this.setState({
      allStars: allStars
    })
    this.props.setStars(index, label)
  }

  toggleMark = (e) => {
    const oldOnes = this.state.oldOnes
    console.log('recipe is ', e, ' oldOnes ', oldOnes)
    if (oldOnes.includes(e)) {
      console.log('it is in status')
      oldOnes.splice(oldOnes.indexOf(e), 1)
    }
    else {
      console.log('in else')
      oldOnes.push(e)
    }
    this.setState({
      oldOnes: oldOnes
    });
  }
  resetNew = () => {
    console.log('in resetnew')
    this.setState({ status: 'New', oldOnes: [] })
  }
  render() {
    return (

      <Router>

        <nav className="navbar navbar-dark bg-dark sticky-top" style={{ fontSize: "2rem", justifyContent: "space-around" }}>
          <Link className="nav-item nav-link" to='/'>Search</Link>
          <Link className="nav-item nav-link" to='/mylist'>My List{' | '}{this.state.favorites.length}</Link>
        </nav>

        <Switch>
          <Route exact path='/' render={() => <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} favorites={this.state.favorites} searchBox={this.state.searchBox} />} />
          <Route path='/mylist' render={() => <FavoritePage noteObject={this.state.noteObject} favorites={this.state.favorites} faveToggle={this.faveToggle} deleteAll={this.deleteAll} toggleMark={this.toggleMark} resetNew={this.resetNew} oldOnes={this.state.oldOnes} getText={this.getText} deleteIt={this.deleteIt} handleChange={this.handleChange} noteValue={this.state.noteValue} noteBox={this.state.noteBox} setStars={this.setStars} starsObject={this.state.starsObject} allStars={this.state.allStars} resetThis={this.resetThis} makeStars={this.makeStars} addStars={this.addStars} />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
