import React,{Component} from 'react'
import Star from '../components/Star'
class Mark extends Component {
    constructor(props){
    super(props);
    this.state={
        stars:5,
        starred:0,
        allStars:[]
    }
    }
 addStars =(index)=>{
     console.log('addStars')
    const allStars=[]
    for(let i=0; i<5;i++){
        allStars.push(<Star key = {i} index={i} startStatus={"fa fa-star"}/>)
    }
    for(let i =0; i<=index;i++ ){
        console.log('allaslsjflaksdjf', i)

            allStars[i]=<Star key = {i} index={i} startStatus={"fa fa-star checked"}/>
        
    }
    this.setState({
        allStars:allStars
    })
}
componentDidMount(){
    const allStars= []
    for(let i = 0; i<5; i++){
        allStars.push(<Star key={i} index={i} addStars={this.addStars} startStatus={"fa fa-star"}/>)
    }
    this.setState({
        allStars:  allStars
    })
}
// const allStars=[
// <span onClick={()=>addStars(0)} className="fa fa-star"></span>,
// <span onClick={()=>addStars(1)} className="fa fa-star"></span>,
// <span onClick={()=>addStars(2)} className="fa fa-star"></span>,
// <span onClick={()=>addStars(3)} className="fa fa-star"></span>,
// <span onClick={()=>addStars(4)} className="fa fa-star"></span>]
render(){
    return (<div>
        {this.state.allStars}
</div>
    // <div style={{ display: "inline" }}>
    //     <button className="pointer" onClick={() => props.toggleMark(props.recipe.label)}>Status</button>
    //     <p>{props.oldOnes.includes(props.recipe.label) ? 'Old' : 'New'}</p>
    // </div>
    );}
}

export default Mark;