import React from 'react'

const AddIcon = props => {

    return <i className="material-icons" >

        {(props.favorites.includes(props.item)) ? "remove" : "add"}
    </i>
}
export default AddIcon