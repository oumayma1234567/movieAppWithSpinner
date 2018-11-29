import React from 'react';
const Rate = ({rate,onChange={}})=>{
    let newArray = []
    for(let i = 1; i < 6; i++) {
        if(i <= rate) {
            newArray.push(<span onClick={()=>onChange(i)} >★</span>)
        }
        else {
            newArray.push(<span onClick={()=>onChange(i)}>✩</span>)
        }
    }
    return (
        <div>{newArray}</div>
    )
}
export default Rate