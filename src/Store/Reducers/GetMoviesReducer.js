const INITIAL_STATE = {
    moviesListStore: []
}


export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                moviesList: action.movies
            }
        default: return state
    }
}