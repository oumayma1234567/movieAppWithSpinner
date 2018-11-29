import React from 'react';
import Rate from './Rate'
const RatingText = (props)=>{
    return(
        <div className="rating-text">
        <div className="title-rating">
<h3>Minimum Rating</h3>
</div>
<div className="rating">
<Rate  className="rate"  rate={props.inputRate}
        onChange={newrating =>props.inputonChangeRate(newrating)}
        />
</div>
   
</div>
    )
}
export default RatingText