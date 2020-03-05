import React from 'react';

import './CardMovieDetail.css'

const CardMovieDetail = (props) => {
    return (
        <div className="card text-center movie-content">
            <div className="card-header">
                header
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.body}</p>
            </div>
            <div className="card-footer text-muted">
                footer
            </div>
        </div>
    )
}

export default CardMovieDetail;