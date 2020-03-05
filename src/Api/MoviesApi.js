import axios from 'axios'
import Constants from '../Statics/Constants';

class MoviesApi {

    getMovies() {
        return axios.get(Constants.urlBase + Constants.getTopRatedMovies + Constants.tmdbKey);
    }

    getById(movieId) {
        return axios.get(Constants.urlBase + Constants.getById + movieId + "?" + Constants.tmdbKey);
    }
}

export default MoviesApi;