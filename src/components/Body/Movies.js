import React, { useEffect } from 'react';

import MovieCard from './MovieCard/MovieCard';

import dispatch from 'rxjs/internal/observable/range'
import { connect } from 'react-redux'
import { get20PopMovies } from '../../Store/Actions/GetMoviesAction'


const Movies = (props) => {

    function getMovieIdToFather(id) {
        props.getMovieId(id);
    }

    useEffect(() => {
        props.getMoviesDipatch()
    }, [])

    function moviesList() {
        return props.movies.moviesList.map((movie, i) => {
            return (
                <MovieCard movieId={() => getMovieIdToFather(movie.id)}
                    key={i}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                    id={movie.id} />)
        })
    }

    return (
        <div>
            <h4 className="title-page">Top 20 Most Popular Movies</h4>
            {moviesList()}
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesDipatch: () => dispatch(get20PopMovies())
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);