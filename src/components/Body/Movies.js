import React, { useState, useEffect } from 'react';

import MoviesApi from '../../Api/MoviesApi';
import MovieCard from './MovieCard/MovieCard';

import { connect} from 'react-redux'

let moviesArr = [];

const Movies = (props) => {
    const [movies, setMovies] = useState([])
    const [emptyState, setEmptyState] = useState(false)

    function getMovieIdToFather(id) {
        props.getMovieId(id);
    }

    useEffect(() => {
        const moviesApi = new MoviesApi();
        moviesApi.getMovies()
            .then(response => {
                setMovies(response.data.results)
                moviesArr = response.data.results;
            })
            .catch(err => console.log(err))
    }, [])


    function moviesList() {
        return movies.map((movie, i) => {
            return (
                <MovieCard movieId={() => getMovieIdToFather(movie.id)} 
                    key={i} 
                    title={movie.title} 
                    release_date={movie.release_date} 
                    vote_average={movie.vote_average} 
                    id={movie.id} />)
        })
    }

    function handleChange(target) {
        let filterResult = moviesArr.filter(el => el.title.includes(target));
        setMovies(filterResult)
        if (filterResult.length < 1) {
            setEmptyState(true)
        }
        else {
            setEmptyState(false)
        }
        setMovies(filterResult)
    };

    return (
        <div>
                <h4 className="title-page">Top 20 Most Popular Movies</h4>
            <div className="input-group mb-3 search-field">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                </div>
                <input type="text" id="search-field" className="form-control" placeholder="Movie" aria-label="Movie" aria-describedby="basic-addon1" onChange={(e) => handleChange(e.target.value)} />
            </div>
            {emptyState ?
                <div id="no-results">Sorry... No results</div>
                :
                moviesList()}
        </div>
    )

}
export default connect(null, null)(Movies);