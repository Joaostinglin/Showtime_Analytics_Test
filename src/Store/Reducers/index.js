import { combineReducers } from 'redux'

import movies from './GetMoviesReducer'

const rootReducer = combineReducers({
    movies
})

export default rootReducer
