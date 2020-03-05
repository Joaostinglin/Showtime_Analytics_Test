import React from 'react';

import './MovieCard.css'
const MovieCard = (props) => {
    // movie lista 
    return (
        <div className="card text-center card-content-body">
            <div className="movieCard-body">
                <div className="movie-informations">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">{props.release_date}</p>
                </div>

                <div className="movie-vote">
                    <h6 className="card-title">{props.vote_average}</h6>
                </div>

                <div className="movie-informations-btn">
                    <button type="button" onClick={() => props.movieId(props.id)} className="btn btn-primary btn-xs">
                        infos
                </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;