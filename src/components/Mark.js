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
// componentDidMount(){
//     this.makeStars()
    // console.log(this.props.starsObject)
    // const allStars= []
    // for(let i = 0; i<5; i++){
    //     if(i<=this.state.starred)
    //     allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star checked"}/>)
    //     else{
    //         allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star"}/>)

    //     }
    // }
   
    // allStars.push(<button onClick={()=>this.resetThis(0,this.props.label)}>Reset</button>)

    // this.setState({
    //     allStars:  allStars
    // })
// }
// makeStars=()=>{
//     console.log(this.props.starsObject)
//     const allStars= []
//     for(let i = 0; i<5; i++){
//         if(i<=this.state.starred)
//         allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star checked"}/>)
//         else{
//             allStars.push(<Star key={i} index={i} label={this.props.label} addStars={this.addStars} startStatus={"fa fa-star"}/>)

//         }
//     }
   
//     allStars.push(<button onClick={()=>this.resetThis(0,this.props.label)}>Reset</button>)

//     this.setState({
//         allStars:  allStars
//     })
// }

// resetThis=(index,label)=>{
//     console.log('this is this')
//     this.props.setStars(index,label)
//     this.setState({
//         starred:0
//     })
//     this.makeStars()
// }
// addStars =(index, label)=>{
//    const allStars=[]
//    for(let i=0; i<5;i++){
//        allStars.push(<Star label={this.props.label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star"}/>)
//    }
//    for(let i =0; i<=index;i++ ){
//            allStars[i]=<Star  label={this.props.label} key = {i} index={i} addStars={this.addStars} startStatus={"fa fa-star checked"}/>
       
//    }
//    allStars.push(<button onClick={()=>this.resetThis(0,this.props.label)}>Reset</button>)
//    this.setState({
//        allStars:allStars
//    })
//    this.props.setStars(index,label)
// }

render(){
    // console.log("this is allstars",this.state.allStars, this.props.label)
    return (<div>
        {/* {this.state.allStars}
</div>
    <div style={{ display: "inline" }}> */}
        <button className="pointer" onClick={() => this.props.toggleMark(this.props.recipe.label)}>Status</button>
        <p>{this.props.oldOnes.includes(this.props.recipe.label) ? 'Old' : 'New'}</p>
    </div>
    );}
}

export default Mark;