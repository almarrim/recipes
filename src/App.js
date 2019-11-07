import React, { Component } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import dotenv from 'dotenv';
import axios from 'axios';
// import hits from './hits';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FavoritePage from './components/FavoritePage';
import Star from './components/Star';
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
      starsObject:{},
      allStars:[],
      oldOnes: [],
      searchBox:''
    };
  }

  getResults = (item) => {
    // e.preventDefault()
    const apiURL = `http://api.edamam.com/search?q=${item}&app_id=${process.env.REACT_APP_EDMAME_API_ID}&ap_key=${process.env.REACT_APP_EDMAME_API_KE}&from=0&to=20`
    axios({
      method: 'get',
      url: apiURL
    })
      .then(res => {
    this.setState({
      recipes: res.data.hits,
      searchBox:''
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
  handleSearchChange=(e)=>{
    this.setState({ searchBox: e.target.value })
  }
  handleChange = (e) => {
    console.log('handleChange')
    // this.setState({ noteBox: e.target.value })

  }
  resetNew=()=>{
    // console.log('in resetnew')
    this.setState({
      starsObject:{},
    })
  }
  setStars=(index,label)=>{
    const starsObject={...this.state.starsObject};
    starsObject[label]=index;
    this.setState({
      starsObject:starsObject
    })
  }
  makeStars=()=>{
    console.log(this.props.starsObject)
    const allStars= []
    for(let i = 0; i<5; i++){
        if(i<=this.state.starred)
        allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star checked"}/>)
        else{
            allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star"}/>)

        }
    }
   
    allStars.push(<button onClick={()=>this.resetThis(0,this.props.label)}>Reset</button>)

    this.setState({
        allStars:  allStars
    })
}
resetThis=(index,label)=>{
  console.log('this is this')
  this.setStars(index,label)
  this.setState({
      starred:0
  })
  this.makeStars()
}
addStars =(index, label)=>{
   const allStars=[]
   for(let i=0; i<5;i++){
       allStars.push(<Star label={label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star"}/>)
   }
   for(let i =0; i<=index;i++ ){
       console.log('allaslsjflaksdjf', i)

           allStars[i]=<Star  label={label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star checked"}/>
       
   }
   allStars.push(<button onClick={()=>this.props.resetThis(0,this.props.label)}>Reset</button>)
   this.setState({
       allStars:allStars
   })
   this.props.setStars(index,label)
}
//   addStars =(index, label)=>{
//     console.log('addStars')
//     const starsObject= this.state.starsObject
//     starsObject[label]
//    const allStars=[]
//    for(let i=0; i<5;i++){
//        allStars.push(<Star label={this.props.recipe.label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star"}/>)
//    }
//    for(let i =0; i<=index;i++ ){
//        console.log('allaslsjflaksdjf', i)

//            allStars[i]=<Star key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star checked"}/>
       
//    }
//    allStars.push(<button onClick={this.resetNew}>Reset</button>)
//    this.setState({
//        allStars:allStars
//    })
// }
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
  toggleMark = (e) => {
    const oldOnes = this.state.oldOnes
    console.log('recipe is ',e,' oldOnes ',oldOnes)
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
  resetNew=()=>{
    console.log('in resetnew')
    this.setState({status:'New',oldOnes:[]})
  }
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
          <Link className="nav-item nav-link" to='/mylist'>My List{' | '}{ this.state.favorites.length}</Link>
          {/* </div> */}
        </nav>
        <Switch>
          <Route exact path='/' render={() => <SearchPage getResults={this.getResults} recipes={this.state.recipes} faveToggle={this.faveToggle} favorites={this.state.favorites} searchBox={this.state.searchBox}/>} />
          <Route path='/mylist' render={() => <FavoritePage noteObject={this.state.noteObject} favorites={this.state.favorites} faveToggle={this.faveToggle} deleteAll={this.deleteAll} toggleMark={this.toggleMark} resetNew={this.resetNew} oldOnes={this.state.oldOnes} getText={this.getText} deleteIt={this.deleteIt} handleChange={this.handleChange} noteValue={this.state.noteValue} noteBox={this.state.noteBox} setStars={this.setStars} starsObject={this.state.starsObject} allStars={this.state.allStars} resetThis={this.resetThis} makeStars={this.makeStars} addStars={this.addStars}/>} />
        </Switch>
      </Router>

    );
  }
}

export default App;
