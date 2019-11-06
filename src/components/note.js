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
        console.log("this is label", this.props.label)
        return (
            <>
                <NoteForm noteObject={this.props.noteObject} label={this.props.label} getText={this.props.getText} handleChange={this.props.handleChange} noteBox={this.props.noteBox} />
                <NoteBoard noteObject={this.props.noteObject} label={this.props.label} noteValue={this.props.noteValue} deleteIt={this.props.deleteIt} />
            </>
        );
    }
}

export default Note;