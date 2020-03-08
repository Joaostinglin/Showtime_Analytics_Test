const INITIAL_STATE = {
    moviesList: [],
    loading: false,
    movieById: {}
}


export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                moviesList: action.movies,
                loading: false,
                movieById: {}
            }
        case 'GET_MOVIES_BY_ID_INIT':
            return {
               ...state, loading: true,
               
            }
        case 'GET_MOVIES_BY_ID_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                movieById: action.movie
            }
        default: return state
    }
}