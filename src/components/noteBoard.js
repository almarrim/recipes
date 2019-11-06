import React from 'react'

const NoteBoard = props => {
    return <p>
        {(props.noteObject[props.label])? (props.noteObject[props.label]) : "no notes available"}
        <button onClick={props.deleteIt}>Delete</button>
    </p>
}
export default NoteBoard;