import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'collections',
    initialState: {
        collections: []
    },
    reducers: {
        addCollection: (state, collection) => {
            state.collections.push(collection)
        },
    },
})

export const { addCollection } = slice.actions
export default slice.reducer
