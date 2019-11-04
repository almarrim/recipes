import React, { Component } from 'react'
import NoteForm from './noteForm';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteBox: '',
            noteValue: '',

        }
    }
    getText = (e) => {
        e.preventDefault()
        console.log('here in the e', e.target)
        this.setState({
            noteValue: e.target.value
        })
    }
    handleChange = (e) => {
        this.setState({ noteBox: e.target.value })

    }
    render() {
        console.log(this.state.noteBox)
        return (
            <>
                <NoteForm getText={this.getText} handleChange={this.handleChange} />

            </>
        );
    }
}

export default Note;