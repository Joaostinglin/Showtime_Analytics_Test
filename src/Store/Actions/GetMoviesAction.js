import { dispatch } from 'rxjs/internal/observable/range'
import MoviesApi from '../../Api/MoviesApi'

import types from '../Constants';

export const getMoviesSuccess = (movies) => {
    return {
        type: types.GET_MOVIES,
        movies
    }
}

export const getMovieByIdInitial = () => {
    return {
        type: types.GET_MOVIES_BY_ID_INIT,
        loading: true
    }
}

export const getMovieByIdSuccess = (movie) => {
    return {
        type: types.GET_MOVIES_BY_ID_SUCCESS,
        loading: false,
        movie
    }
}

// API CALLS
export const getMoviesListApi = () => {
    const moviesApi = new MoviesApi();
    return dispatch => {
        moviesApi.getMovies()
            .then(response => {
                dispatch(getMoviesSuccess(response.results))
            })
            .catch(err => console.log(err))
    }
}

export const getMovieByIdApi = (id) => {
    const moviesApi = new MoviesApi();
    return dispatch => {
        dispatch(getMovieByIdInitial())
        moviesApi.getById(id)
            .then(response => {
                dispatch(getMovieByIdSuccess(response))
            })
            .catch(err => console.log(err))
    }
}


// DISPATCH CALLS

export const get20PopMovies = () => {
    return dispatch => {
        dispatch(getMoviesListApi())
    }
}

export const getMovieById = (id) => {
    return dispatch => {
        dispatch(getMovieByIdApi(id))
    }
}