const INITIAL_STATE = {
    moviesList: []
}


export default function movies(state = INITIAL_STATE, action) {
    // debugger
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                moviesList: action.movies
            }
        default: return state
    }
}