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
      noteObject: {},
      noteValue: '',
      noteBox: '',
      // oldOnes: [],
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
  handleChange = (e) => {
    console.log('handleChange')
    // this.setState({ noteBox: e.target.value })

  }
  //   toggleMark = (e) => {
  //     const oldOnes = this.state.oldOnes
  //     console.log('recipe is ',e,' oldOnes ',oldOnes)
  //     if (oldOnes.includes(e)) {
  //       console.log('it is in status')
  //       oldOnes.splice(oldOnes.indexOf(e), 1)
  //     }
  //     else {
  //       console.log('in else')
  //       oldOnes.push(e)
  //     }
  //     this.setState({
  //       oldOnes: oldOnes
  //     });
  //   }
  // resetNew=()=>{
  //   console.log('in resetnew')
  //   this.setState({status:'New',oldOnes:[]})
  // }
  render() {
    return (
      // <>
      //   <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} />
      //   <FavoritePage favorites={this.state.favorites} faveToggle={this.faveToggle} />
      // </>

      <Router>

        <nav className="navbar navbar-dark bg-dark sticky-top" style={{ fontSize: "2rem", justifyContent: "space-around" }}>
          {/* <div class="container"> */}
          <Link className="nav-item nav-link" to='/'>Search</Link>
          <Link className="nav-item nav-link" to='/mylist'>My List</Link>
          {/* </div> */}
        </nav>
        <Switch>
          <Route exact path='/' render={() => <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} favorites={this.state.favorites} />} />
          <Route path='/mylist' render={() => <FavoritePage noteObject={this.state.noteObject} favorites={this.state.favorites} faveToggle={this.faveToggle} deleteAll={this.deleteAll} toggleMark={this.toggleMark} resetNew={this.resetNew} oldOnes={this.state.oldOnes} getText={this.getText} deleteIt={this.deleteIt} handleChange={this.handleChange} noteValue={this.state.noteValue} noteBox={this.state.noteBox} />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
