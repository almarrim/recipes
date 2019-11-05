import React from 'react'

const AddIcon = props => {

    return <p onClick={props.faveToggle}>
        <i className="material-icons" >

            {(props.favorites.includes(props.item)) ? "remove" : "add"}
        </i>
    </p>
}
export default AddIcon