import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import axios from 'axios';


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
    const apiURL = 'http://api.edamam.com/search?q=chicken&app_id=247f03df&ap_key=6773d74e92e1ad82a068939623de93d9&from=0&to=5'
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
