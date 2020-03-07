import React, { useState, useEffect } from 'react';

import MoviesApi from '../../Api/MoviesApi';
import CardMovieDetail from './CardMovieDetail/CardMovieDetail';
import Loading from './CardMovieDetail/Loading';


const MovieDetail = (props) => {
    const [movieDetail, setMovieDetail] = useState([])
    const [loading, setLoading] = useState(false)

    //fazer a chamada para a url do detalhe do filme
    useEffect(() => {
        setLoading(true)
        const moviesApi = new MoviesApi();
        moviesApi.getById(props.movieId)
            .then(result => {
                setMovieDetail(result.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [props.movieId])
  
    return (
        <div className="detail-body">
            {loading ?
                <Loading /> :
                <CardMovieDetail 
                    title={movieDetail.original_title} 
                    release_date={movieDetail.release_date} 
                    vote_average={movieDetail.vote_average}
                    overview={movieDetail.overview}
                    poster_path={movieDetail.poster_path}
                    production_companies={movieDetail.production_companies}
                    genres={movieDetail.genres} />
               }
            {!loading && <button id="back-button" onClick={() => props.getMovieId(0)} className="btn btn-primary">back</button>}

        </div>
    )
}

export default MovieDetail;