import React,{Component} from 'react';
import Search from './Search';
import Movie from './Movie';
import RatingText from './RatingText';
import AddMovie from './AddMovie';
import LoaderHOC from '../LoderHOC/LoderHOC';
const movies=[
    {
        id:1,
        image:"https://i1.wp.com/media.fushaar.com/media/2018/03/2d6qmkJz9AWqmk9wBWtd2uFX89t.jpg?resize=229%2C337&ssl=1",
        rating:"5",
        title:"BERADWINNER",
        description:"2018",
    },
    {
        id:2,
        image:"https://i0.wp.com/media.fushaar.com/media/2018/09/cFDcj29pWfcRAxEWbUptwQQbj9o.jpg?resize=229%2C337&ssl=1",
        rating:"3",
        title:"Kin",
        description:"2018"
    },
    {
        id:3,
        image:"https://i2.wp.com/media.fushaar.com/media/2018/11/38GDdvmKhN9DYrGtaQ6OQr53Tnh.jpg?resize=229%2C337&ssl=1",
        rating:"2",
        title:"The School",
        description:"2017"
    },
    {
        id:4,
        image:"https://i1.wp.com/media.fushaar.com/media/2018/10/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg?resize=229%2C337&ssl=1",
        rating:"1",
        title:"First Man",
        description:"2018"
    },
]
const filterMovies = (movie,title, minRate) =>{
    
   return movie.rating >= minRate && movie.title.toLowerCase().includes(title.toLowerCase())
}
  class MovieContainer extends Component{
      constructor(props){
          super(props)
          this.state={
              title:"",
              minRate:1,
              movies:movies,
              
          };
      };
      changeName= (newtitle)=>{
        this.setState({
            title:newtitle 
        }
        )
    }
      changeRate=(newrating)=>{
            this.setState({
             minRate:newrating
            })
        }
addMovie=(newMovie={})=>{
    this.setState({
        movies:this.state.movies.concat(newMovie)
    })
    console.log(newMovie)
      }
   
     render(){
         return(
             <div className= "container">
            <div className="search-ratingText">
                 <Search inputvalue={this.state.title} inputonchange={this.changeName}/>
                 <RatingText inputRate={this.state.minRate} inputonChangeRate={newrating =>this.changeRate(newrating)}/>
            </div>
            <div className="movie-app-main">
                 <Movie movieList=
                    {
                     this.state.movies.filter(movie => filterMovies(movie, this.state.title, this.state.minRate))
                    } 
                />
                <div className="add-movie">
                <div className="new-movie">
                <AddMovie  addMovie={this.addMovie} /></div>
             </div>
         
             </div>   
             </div>
             
         )
     }
  }
export default LoaderHOC(MovieContainer)