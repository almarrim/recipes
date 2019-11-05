import React from 'react'
import Note from './note'
import Mark from './Mark'
import AddIcon from './AddIcon';
const RecipeCard = props => {


    const ingredients = props.recipe.ingredientLines.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div >
        <img src={props.recipe.image} alt={props.recipe.lable} />
        <h3>{props.recipe.label}</h3>
        <ul>{ingredients}</ul>
        <a href={props.recipe.url}>More info on {`${props.recipe.source}`}</a>

        <AddIcon faveToggle={props.faveToggle} favorites={props.favorites} item={props.item} />

        <br />
        {(props.inFave) ? <Note /> : null}
        {(props.inFave) ? <Mark recipe={props.recipe} toggleMark={props.toggleMark} oldOnes={props.oldOnes} /> : null}
    </div>
}

export default RecipeCard;