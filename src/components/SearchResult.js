import React from 'react'
import RecipeCard from './RecipeCard'

const SearchResult = props => {
    const allRecipes = props.recipes.map((item, index) => {
        return <RecipeCard recipe={item.recipe} key={index} />
    }
    )
    return <>{allRecipes}</>

}
export default SearchResult;