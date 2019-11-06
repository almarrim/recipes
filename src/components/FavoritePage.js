import React, { Component } from 'react'
import SearchResult from './SearchResult';

class FavoritePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            oldOnes:[],
        }
    }
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
      this.setState({oldOnes:[]})
    }
    render() {

        return (<div>
            <h1>Here is favorite page</h1>
            <button onClick={this.props.deleteAll}>Delete All</button>
            <button onClick={this.resetNew}>Reset New</button>
            <SearchResult recipes={this.props.favorites} faveToggle={this.props.faveToggle} inFave={true} oldOnes={this.state.oldOnes} toggleMark={this.toggleMark} favorites={this.props.favorites} getText={this.props.getText} deleteIt={this.props.deleteIt} handleChange={this.props.handleChange} noteValue={this.props.noteValue} noteBox={this.props.noteBox}/>

        </div>
        );
    }
}

export default FavoritePage;