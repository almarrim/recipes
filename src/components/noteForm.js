import React,{Component} from 'react'

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state={
            noteBox:this.props.noteBox,
        }
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.value)
        this.setState({ 
            noteBox: e.target.value 
        })
      }
    resetText=(e)=>{
        this.props.getText(e, this.props.label,this.state.noteBox)
        this.setState({ 
            noteBox: ''
        })
    }
      render(){
    return <form >
        <input type="text" onChange={this.handleChange} value={this.state.noteBox} />
        <button onClick={this.resetText}>Submit</button>
    </form>
      }
}
export default NoteForm;