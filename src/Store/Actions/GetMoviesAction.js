import { dispatch } from 'rxjs/internal/observable/range'
import MoviesApi from '../../Api/MoviesApi'

export const getMoviesSuccess = (movies) => {
    return {
        type: 'GET_MOVIES',
        movies
    }
}

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

export const get20PopMovies = () => {
    return dispatch => {
        dispatch(getMoviesListApi())
    }
}