/*
Recipe (App): Recipes is an app that generates cooking recipes based on a food item searched by the user. Recipes can be added to a list, marked as new/old and notes can be added to recipe cards in the list. You can visit the app here =>(https://almarrim.github.io/recipes/)
for how to use it checkout the instructions in the README.md file.
*****Disclaimer: This version of the code has parts of a merged branch that are not used here anymore. Due to the limited to submit this project and the errors created by removing parts of the unused codes(all related unused codes need to be removed), it was left here for the time being. They will be removed in future updates. Also, more comments will be added.*****
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
      noteValue: '',//used with notes
      noteBox: '',//used with notes to carry the text to the noteobject
      oldOnes: [],//this is the array that carries the old(tried) recipes
      searchBox: '',//this is the search box text in the search page
      starsObject: {},
    };
  }
  /*
  getResults is where the axios gets called. getResults takes the searchBox text as item and pass it to the axios through the url. getResults then assign the results to recipes, where it the data get used to show the needed info. Also, refreshes the searchBox and set it empty again.
  */
  getResults = (item) => {
    const apiURL = `https://api.edamam.com/search?q=${item}&app_id=${process.env.REACT_APP_EDMAME_API_ID}&app_key=${process.env.REACT_APP_EDMAME_API_KEY}&from=0&to=20`
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
  /*
faveToggle is the function that is responsible for adding removing recipes from the favorite list page.
  */
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
  //Deletes all the recipes from the favorite page
  deleteAll = () => {
    this.setState({
      favorites: []
    })
  }
  /*
  getText is the method responsible for taking the note text and passing it to the object with the related key, and it refreshes the textbox of the note tap. label is the recipe name(the key). noteBox is the value. e is the event.
  */
  getText = (e, label, noteBox) => {
    e.preventDefault()
    const noteObject = this.state.noteObject;
    noteObject[label] = noteBox;
    this.setState({
      noteValue: noteBox,
      noteBox: '',
      noteObject: noteObject
    })

  }
  //delete only the attached note
  deleteIt = (item) => {
    console.log('deleteIt')
    const noteObject = { ...this.state.noteObject }
    delete noteObject[item]
    this.setState({
      noteValue: '',
      noteObject: noteObject

    })
  };
  //this updates the searchBox, which get passed to the api. and allows continues writing
  handleSearchChange = (e) => {
    this.setState({ searchBox: e.target.value })
  }
  handleChange = (e) => {
    console.log('handleChange')
    // this.setState({ noteBox: e.target.value })

  }
  //not used for the current version. As well as all the following related methods related to stars
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
  /*
  toggleMark toggles the status of the recipe card in the favorite page. It updates the oldOnes array which holds the data of cards set to Old status.
  */
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
  /*
resetNew resets all recipe cards to New status.
  */
  resetNew = () => {
    console.log('in resetnew')
    this.setState({ status: 'New', oldOnes: [] })
  }
  //resetNote removes all the notes from the recipe cards
  resetNotes = () => {
    this.setState({ noteObject: {} })
  }
  render() {
    return (

      <Router>

        <nav className="navbar navbar-dark bg-dark sticky-top" style={{ fontSize: "2rem", justifyContent: "space-around" }}>
          <Link className="nav-item nav-link" to='/'>Search</Link>
          <Link className="nav-item nav-link" to='/mylist'>My List{' | '}{this.state.favorites.length}</Link>
        </nav>
        {/* SearchPage and FavoritePage are the only direct children of the main App.js. the SearchPage is where the search happens and the search results are shown. The FavoritePage is where the list of the selected recipes are created. */}
        <Switch>
          <Route exact path='/' render={() => <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} favorites={this.state.favorites} searchBox={this.state.searchBox} />} />
          <Route path='/mylist' render={() => <FavoritePage resetNotes={this.resetNotes} noteObject={this.state.noteObject} favorites={this.state.favorites} faveToggle={this.faveToggle} deleteAll={this.deleteAll} toggleMark={this.toggleMark} resetNew={this.resetNew} oldOnes={this.state.oldOnes} getText={this.getText} deleteIt={this.deleteIt} handleChange={this.handleChange} noteValue={this.state.noteValue} noteBox={this.state.noteBox} setStars={this.setStars} starsObject={this.state.starsObject} allStars={this.state.allStars} resetThis={this.resetThis} makeStars={this.makeStars} addStars={this.addStars} />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
