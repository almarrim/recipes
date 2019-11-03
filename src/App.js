import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  getResults = (e) => {
    e.preventDefault()
    console.log('getResults')
    const apiURL = `http://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDMAME_API_ID}&ap_key=${process.env.REACT_APP_EDMAME_API_KE}&from=0&to=5`
    axios({
      method: 'get',
      url: apiURL
    })
      .then(res => {
        console.log('here in api')
        console.log(res)
      })
      .catch(console.error())
  }
  render() {
    return (
      <>
        <h1>this is app</h1>
        <SearchPage getResults={this.getResults} />
      </>
    );
  }
}

export default App;
