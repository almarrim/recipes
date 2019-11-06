import React from 'react'
import RecipeCard from './RecipeCard'

const SearchResult = props => {
console.log("this is searchResult")
    const allRecipes = props.recipes.map((item, index) => {
        return <RecipeCard resetThis={props.resetThis} makeStars={props.makeStars} allStars={props.allStars} setStars={props.setStars} starsObject={props.starsObject} noteObject={props.noteObject} recipe={item.recipe} key={index} faveToggle={() => props.faveToggle(item)} inFave={props.inFave} toggleMark={props.toggleMark} oldOnes={props.oldOnes} favorites={props.favorites} item={item} getText={props.getText} deleteIt={props.deleteIt} handleChange={props.handleChange} noteValue={props.noteValue} noteBox={props.noteBox} addStars={props.addStars}/>
    }
    )
    return<div className="row"> {allRecipes}</div>

}
export default SearchResult;