import React from 'react'
import Note from './note'
const RecipeCard = props => {
    const ingredients = props.recipe.ingredientLines.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    return <div >
        <img src={props.recipe.image} alt={props.recipe.lable} />
        <h3>{props.recipe.label}</h3>
        <ul>{ingredients}</ul>
        <a href={props.recipe.url}>More info on {`${props.recipe.source}`}</a>
        <p onClick={props.faveToggle}>Add</p>
        <br />
        {(props.inFave) ? <Note /> : null}
    </div>
}
export default RecipeCard;