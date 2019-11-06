import React,{Component} from 'react'
import Note from './note'
import Mark from './Mark'
import AddIcon from './AddIcon';
class RecipeCard extends Component {
constructor(props){
    super(props);
    this.state={
        noteSide:false,
        ingSide:true
    }
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
render(){
    const ingredients = this.props.recipe.ingredientLines.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div className="card"  style={{width: "18rem"}}>
        <h5 className="card-header">{this.props.recipe.label}</h5>
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
        {ingredients}
        </p>
        </ul>
        <a  className="btn btn-primary" href={this.props.recipe.url}>More info on {`${this.props.recipe.source}`}</a>
        <AddIcon faveToggle={this.props.faveToggle} favorites={this.props.favorites} item={this.props.item} />
        {(this.props.inFave) ? <Mark recipe={this.props.recipe} toggleMark={this.props.toggleMark} oldOnes={this.props.oldOnes} /> : null}
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