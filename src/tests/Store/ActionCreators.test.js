import * as actions from '../../Store/Actions/GetMoviesAction'
import types from '../../Store/Constants'
import { expect } from 'chai';

describe('actions', () => {
    it('should create an action to Get Movies Success', () => {
        const movies = [{ movie: "movie 1" }, { movie: "movie 2" }]
        const expectedAction = {
            type: types.GET_MOVIES,
            movies
        }
        expect(JSON.stringify(actions.getMoviesSuccess(movies))).equals(JSON.stringify(expectedAction))
    })

    it('should create an action to Get Movies By Id Initial', () => {
        const expectedAction = {
            type: types.GET_MOVIES_BY_ID_INIT,
            loading: true
        }
        expect(JSON.stringify(actions.getMovieByIdInitial())).equals(JSON.stringify(expectedAction))
    })

    it('should create an action to Get Movies By Id Success', () => {
        const movie = [{ movie: "movie 1" }];
        const expectedAction = {
            type: types.GET_MOVIES_BY_ID_SUCCESS,
            loading: false,
            movie
        }
        expect(JSON.stringify(actions.getMovieByIdSuccess(movie))).equals(JSON.stringify(expectedAction))
        expect(actions.getMovieByIdSuccess(movie).movie).to.have.length(1)
    })
})