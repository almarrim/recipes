import React,{Component} from 'react'
import Note from './note'
import Mark from './Mark'
import AddIcon from './AddIcon';
class RecipeCard extends Component {
constructor(props){
    super(props);
    this.state={
        noteSide:false,
        ingSide:true,
        showMore:false,
        showWord:'...more',

    }
}
componentDidMount(){
    const ingredients = this.props.recipe.ingredientLines.map((item, index) => {        
        return <li key={index}>{item}</li>})
        this.setState({
            ingredients:ingredients,
            subIng:ingredients.slice(0,3)
        })
}
switchNote= ()=> {
    this.setState({

        noteSide:true,
        ingSide:false
    })
}
switchIng= ()=> {
    this.setState({

        noteSide:false,
        ingSide:true
    })
}
showMore=()=>{
    this.setState({
        showMore:!this.state.showMore,
        showWord:(this.state.showWord=='...more')?'Less.':'...more',
    })
}
render(){

    return <div className="card col-md-3 col-sm-6 col-12"  style={{width: "18rem" }}>
        <h5 className="card-header bg-dark" style={{color:"white"}}>{this.props.recipe.label}</h5>
        <img className="card-img-top" src={this.props.recipe.image} alt={this.props.recipe.lable} />
        <div className="card-body">
        <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
        
        <li className="nav-item">
        <a className="nav-link" onClick={this.swithchIng}>Ingredients</a>
        </li>
{(this.props.inFave) ? <li className="nav-item">
<a className="nav-link" onClick={this.switchNote}>Notes</a>
</li> : null}
        
        </ul>
        </div>
        <div>
        {(this.state.ingSide)?
        <div>
        <ul>
        <p className="card-text">
            {(this.state.showMore)?this.state.ingredients: this.state.subIng}<span className="showMore pointer" onClick={this.showMore}>{this.state.showWord}</span>
        {/* {this.state.ingredients} */}
        </p>
        </ul>
        <a  className="btn btn-primary" href={this.props.recipe.url}>More info on {`${this.props.recipe.source}`}</a>
        {(this.props.inFave) ? <Mark recipe={this.props.recipe} toggleMark={this.props.toggleMark} oldOnes={this.props.oldOnes} /> : null}
        <AddIcon faveToggle={this.props.faveToggle} favorites={this.props.favorites} item={this.props.item} />
        </div>:null}
        {(this.state.noteSide)?
        <div>
        {(this.props.inFave) ? <Note /> : null}
        </div>:null}
        </div>
        </div>
        </div>

}}

export default RecipeCard;