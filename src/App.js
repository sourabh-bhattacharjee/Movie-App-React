/* eslint-disable react/no-direct-mutation-state */
import MovieList from "./movieList";
import React from "react";
import NavBar from "./NavBar";
import {movieData } from "./moviesData";
class App extends React.Component {

  constructor(){
    super();
    this.state = {
        movies : movieData,
        cardCount: 0
    }
    console.log(this.state);
  }
  handleIncStars = (indexMovie) =>{
    const mId = this.state.movies.indexOf(indexMovie);
    if(this.state.movies[mId].starCt >=5){
        return;
    }
    this.state.movies[mId].starCt += 0.5;
    this.setState({
        movies : this.state.movies
    })
    
}
handleDecStars = (indexMovie) => {
    const mId = this.state.movies.indexOf(indexMovie);
    if(this.state.movies[mId].starCt <=0){
        return;
    }
    this.state.movies[mId].starCt -= 0.5;
    this.setState({
        movies: this.state.movies
    })
}
handleFavClick = (indexMovie) => {
    const mId = this.state.movies.indexOf(indexMovie);
    this.state.movies[mId].fav = !this.state.movies[mId].fav;
    this.setState({
        movies : this.state.movies
    })
}
handleCartClick = (indexMovie) => {
    const mId = this.state.movies.indexOf(indexMovie);
    this.state.movies[mId].isCartAdded = !this.state.movies[mId].isCartAdded;
    this.state.movies[mId].isCartAdded ? ++this.state.cardCount : --this.state.cardCount ;
    this.setState({
        movies : this.state.movies,
        cardCount: this.state.cardCount
    })
}
  render(){
    return(
      <>
      <NavBar cardCount = {this.state.cardCount}/>
      <MovieList movies ={this.state.movies} addstars = {this.handleIncStars} 
      decstars = {this.handleDecStars} favclick = {this.handleFavClick} 
      cartclick = {this.handleCartClick} />
      </>
      
    )
  }
}

export default App;
