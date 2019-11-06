import React,{Component} from 'react'
import Star from '../components/Star'
class Mark extends Component {
    constructor(props){
    super(props);
    this.state={
        stars:5,
        starred:this.props.starsObject[this.props.label]?this.props.starsObject[this.props.label]:0,
        allStars:[]
    }
    }
componentDidMount(){
    console.log(this.props.starsObject)
    const allStars= []
    for(let i = 0; i<5; i++){
        if(i<=this.state.starred)
        allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star checked"}/>)
        else{
            allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star"}/>)

        }
    }
   
    allStars.push(<button onClick={this.resetNew}>Reset</button>)

    this.setState({
        allStars:  allStars
    })
}
addStars =(index, label)=>{
   const allStars=[]
   for(let i=0; i<5;i++){
       allStars.push(<Star label={this.props.label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star"}/>)
   }
   for(let i =0; i<=index;i++ ){
       console.log('allaslsjflaksdjf', i)

           allStars[i]=<Star  label={this.props.label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star checked"}/>
       
   }
   allStars.push(<button onClick={this.resetNew}>Reset</button>)
   this.setState({
       allStars:allStars
   })
   this.props.setStars(index,label)
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