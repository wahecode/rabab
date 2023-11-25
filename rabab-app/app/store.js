import { combineReducers, configureStore } from '@reduxjs/toolkit'
import theme from './slices/themeToggleSlice'
import collections from './slices/collectionSlice'
import consoleData from './slices/consoleSlice'
import requests from './slices/requestSlice'

const reducer = combineReducers({
    theme,
    collections,
    consoleData,
    requests,
})

export const store = configureStore({
    reducer,
})

export default store
