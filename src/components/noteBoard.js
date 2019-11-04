import React from 'react'

const NoteBoard = props => {
    return <p>
        {(props.noteValue) ? (props.noteValue) : "no notes available"}
        <button onClick={props.deleteIt}>Delete</button>
    </p>
}
export default NoteBoard;