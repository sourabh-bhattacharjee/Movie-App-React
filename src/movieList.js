/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import MovieCard from "./movieCard";
export default class movieList extends React.Component{

    constructor(){
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  starCt: 0,
                  fav: false,
                  isCartAdded: false               
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  starCt: 0,            
                  fav: false,
                  isCartAdded: false                
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  starCt: 0,            
                  fav: false,
                  isCartAdded: false                  
                }]
        }
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
    render(){
        const movieList = this.state.movies;
        return (
            movieList.map((movieIndex) => <MovieCard movie = {movieIndex} addstars = {this.handleIncStars} 
                                            decstars = {this.handleDecStars} />)
        )
    }
}