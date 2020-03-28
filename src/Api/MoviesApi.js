import Constants from '../Statics/Constants';

class MoviesApi {

    async getMovies() {
        let response = await fetch(Constants.urlBase + Constants.getTopRatedMovies + Constants.tmdbKey);
        let data = await response.json()
        return data;
    }

    async getById(movieId) {
        let response = await fetch(Constants.urlBase + Constants.getById + movieId + "?" + Constants.tmdbKey);
        let data = await response.json()
        return data;
    }
}

export default MoviesApi;