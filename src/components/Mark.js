import React from 'react'

const Mark =props=> {
       return (<>
            <button className="pointer" onClick={()=>props.toggleMark(props.recipe.label)}>Status</button>
            <p>{props.oldOnes.includes(props.recipe.label)? 'Old':'New'}</p>
        </>
        );
    }

export default Mark;