import React, { Component } from 'react'
import Note from './note'
import Mark from './Mark'
import AddIcon from './AddIcon';
class RecipeCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         added: true,
    //     }
    // }
    // toggleAdded = () => {
    //     (this.state.added) ? this.setState({ added: false }) : this.setState({ added: true })
    // }
    render() {
        const ingredients = this.props.recipe.ingredientLines.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        // console.log("favessssssssss ", this.props.faved, "alallalalaalalala", this.props.recipes)
        // console.log("2222222", this.props.recipes.includes(this.props.faved))
        return <div >
            <img src={this.props.recipe.image} alt={this.props.recipe.lable} />
            <h3>{this.props.recipe.label}</h3>
            <ul>{ingredients}</ul>
            <a href={this.props.recipe.url}>More info on {`${this.props.recipe.source}`}</a>
            <p onClick={this.props.faveToggle}>
                <AddIcon favorites={this.props.favorites} item={this.props.item} />
            </p>
            <br />
            {(this.props.inFave) ? <Note /> : null}
            {(this.props.inFave) ? <Mark recipe={this.props.recipe} toggleMark={this.props.toggleMark} oldOnes={this.props.oldOnes} /> : null}
        </div>
    }
}
export default RecipeCard;