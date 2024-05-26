/* eslint-disable react/no-direct-mutation-state */
import MovieCard from "./movieCard";
export default function movieList(props) {

    
    const {movies ,addstars , decstars ,favclick, cartclick} = props;
    return (
        movies.map((movieIndex) => <MovieCard movie = {movieIndex} addstars = {addstars}                                             decstars = {decstars} favclick = {favclick} 
                                        cartclick = {cartclick} />)
    )
}