import { combineReducers } from '@reduxjs/toolkit'

import feriadoReducer from './slices/feriadoSlice'

const rootReducer = combineReducers({
    feriado: feriadoReducer
})

export default rootReducer