import { combineReducers, configureStore } from '@reduxjs/toolkit'
import theme from './slices/themeToggleSlice'
import collections from './slices/collectionSlice'

const reducer = combineReducers({
    theme,
    collections,
})

export const store = configureStore({
    reducer,
})

export default store
