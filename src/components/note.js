import React, { Component } from 'react'
import NoteForm from './noteForm';
import NoteBoard from './noteBoard';

class Note extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     noteBox: '',
        //     noteValue: '',

        // }
    }
    // getText = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         noteValue: this.state.noteBox,
    //         noteBox: ''
    //     })

    // }
    // deleteIt = () => {
    //     this.setState({
    //         noteValue: '',
    //     })
    // }
    // handleChange = (e) => {
    //     this.setState({ noteBox: e.target.value })

    // }

    render() {
        return (
            <>
                <NoteForm getText={this.props.getText} handleChange={this.props.handleChange} noteBox={this.props.noteBox} />
                <NoteBoard noteValue={this.props.noteValue} deleteIt={this.props.deleteIt} />
            </>
        );
    }
}

export default Note;