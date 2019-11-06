import React from 'react'

const Star = props=>{
    return <><span onClick={()=>props.addStars(props.index,props.label)} className={props.startStatus}></span></>
}
export default Star;
