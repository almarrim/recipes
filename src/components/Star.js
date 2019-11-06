import React from 'react'

const Star = props=>{
    return <><span onClick={()=>props.addStars(props.index)} className={props.startStatus}></span></>
}
export default Star;
