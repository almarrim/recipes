import React, { Component } from 'react'
import NoteForm from './noteForm';
import NoteBoard from './noteBoard';

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
        this.setState({
            noteValue: this.state.noteBox,
            noteBox: ''
        })

    }
    handleChange = (e) => {
        this.setState({ noteBox: e.target.value })
    }
    deleteIt = () => {
        this.setState({
            noteValue: '',
        })
    }

    render() {
        return (
            <>
                <NoteForm getText={this.getText} handleChange={this.handleChange} noteBox={this.state.noteBox} />
                <NoteBoard noteValue={this.state.noteValue} deleteIt={this.deleteIt} />
            </>
        );
    }
}

export default Note;