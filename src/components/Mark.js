import React from 'react'

const Mark =props=> {
       return (<>
            <button onClick={()=>props.toggleMark(props.recipe.label)}>Status</button>
            <p>{props.oldOnes.includes(props.recipe.label)? 'Old':'New'}</p>
        </>
        );
    }

export default Mark;