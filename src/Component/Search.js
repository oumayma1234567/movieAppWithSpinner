import React from 'react';

const Search = (props)=>{
    return(
    <div className="movie-container">
    <div className="header">
    <form className="search">
    <div className="button-text">
    <input 
    type="text" 
    placeholder="Search..."
     className="text" 
     value={props.inputvalue}  
    onChange={event=>props.inputonchange(event.target.value)}
     />
    
  </div> 
   </form>
    </div>
    
 

   
</div>
    )
}
export default Search


