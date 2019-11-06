import React,{Component} from 'react'

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
            searchBox:this.props.searchBox}
    }
handleSearchChange=(e)=>{
    console.log(e)
    this.setState({ searchBox: e.target.value })
}
getResults=(e,item)=>{
    e.preventDefault();
    this.props.getResults(item)
}
render(){
    return <form>
        <input type="text" name="searchText" onChange={this.handleSearchChange} value={this.state.searchBox}/>
        <button onClick={(e)=>this.getResults(e,this.state.searchBox)}>Search</button>
    </form>
}}
export default SearchForm;