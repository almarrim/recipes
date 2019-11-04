import React from 'react'

const NoteForm = props => {

    return <form >
        <input type="text" onChange={props.handleChange} />
        <button onClick={props.getText}>Submit</button>
    </form>

}
export default NoteForm;