import React, { useState } from 'react';

import './Body.css';

import Movies from './Movies';
import MovieDetail from './MovieDetail';

const Body = () => {
    const [movieId, setMovie] = useState(0);

    return (
        <div className="body-content">
            {movieId === 0 ?
                <Movies getMovieId={(id) => setMovie(id)} />
                : <MovieDetail movieId={movieId} getMovieId={(id) => setMovie(id)} />}
        </div>
    )
}

export default Body;