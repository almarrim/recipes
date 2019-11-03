import React from 'react'
const RecipeCard = props => {

    return <>
        <img src={props.recipe.image} alt={props.recipe.lable} />
        <h3>{props.recipe.label}</h3>
    </>
}
export default RecipeCard;