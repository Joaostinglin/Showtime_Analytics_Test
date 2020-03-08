import { dispatch } from 'rxjs/internal/observable/range'
import MoviesApi from '../../Api/MoviesApi'

export const getMoviesSuccess = (movies) => {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

export const getMovieByIdInitial = () => {
    return {
        type: 'GET_MOVIES_BY_ID_INIT',
        loading: true
    }
}

export const getMovieByIdSuccess = (movie) => {
    return {
        type: 'GET_MOVIES_BY_ID_SUCCESS',
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
                dispatch(getMoviesSuccess(response.data.results))
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
                dispatch(getMovieByIdInitial())
                dispatch(getMovieByIdSuccess(response.data))
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