import React, { useState, useEffect } from 'react';

import MoviesApi from '../../Api/MoviesApi';
import CardMovieDetail from './CardMovieDetail/CardMovieDetail';
import Loading from './CardMovieDetail/Loading';

import dispatch from 'rxjs/internal/observable/range'
import { connect } from 'react-redux'
import { getMovieById } from '../../Store/Actions/GetMoviesAction'


const MovieDetail = (props) => {

    useEffect(() => {
      props.getMoviesByIdDipatch(props.movieId)
    }, [])
  
    return (
        <div className="detail-body">
            {props.movies.loading ?
                <Loading /> :
                <CardMovieDetail 
                    title={props.movies.movieById.original_title} 
                    release_date={props.movies.movieById.release_date} 
                    vote_average={props.movies.movieById.vote_average}
                    overview={props.movies.movieById.overview}
                    poster_path={props.movies.movieById.poster_path}
                    production_companies={props.movies.movieById.production_companies}
                    genres={props.movies.movieById.genres} />
               }
            {!props.movies.loading && <button id="back-button" onClick={() => props.getMovieId(0)} className="btn btn-primary">back</button>}

        </div>
    )
}


export const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesByIdDipatch: (id) => dispatch(getMovieById(id))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);




