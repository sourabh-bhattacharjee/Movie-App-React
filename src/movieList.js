/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import MovieCard from "./movieCard";
export default class movieList extends React.Component{

    render(){
        const {movies ,addstars , decstars ,favclick, cartclick} = this.props;
        return (
            movies.map((movieIndex) => <MovieCard movie = {movieIndex} addstars = {addstars} 
                                            decstars = {decstars} favclick = {favclick} 
                                            cartclick = {cartclick} />)
        )
    }
}