import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'collections',
    initialState: {
        collections: [],
    },
    reducers: {
        addCollection: (state, action) => {
            state.collections.push(action.payload)
        },
    },
})

export const { addCollection } = slice.actions
export default slice.reducer
