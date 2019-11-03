import React from 'react'
import RecipeCard from './RecipeCard'

const SearchResult = props => {
    const allRecipes = props.recipes.map((item, index) => {
        // <li>{item.recipe.label}</li>
        return <RecipeCard recipe={item.recipe} key={index} />
    }
    )
    return <>{allRecipes}</>

}
export default SearchResult;