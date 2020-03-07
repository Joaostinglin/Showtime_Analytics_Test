import { dispatch } from 'rxjs/internal/observable/range'
import MoviesApi from '../../Api/MoviesApi'

// const INITIAL_STATE = {
//     type: 'GET_MOVIES',
//     moviesList: []
// }


function getMoviesSuccess(movies) {
    return {
        type: 'GET_MOVIES',
        moviesList: movies
    }
}



export const getMoviesListApi = () => {
    const moviesApi = new MoviesApi();
    moviesApi.getMovies()
        .then(response => {
            dispatch(getMoviesSuccess(response.data.results))
        })
        .catch(err => console.log(err))
}

export const getMovies = () => {
    return {
        // dispatch(INITIAL_STATE)
        getMoviesListApi()
    }
}