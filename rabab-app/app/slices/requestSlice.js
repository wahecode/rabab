import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'requests',
    initialState: {
        requests: [],
    },
    reducers: {
        addNewRequest: (state, action) => {
            state.requests.push({
                id: Math.random(),
                name: 'New Request',
                collectionId: action.payload.collectionId,
                uri: null,
                method: 'GET',
                params: [],
                headers: [],
            })
        },
    },
})

export const { addNewRequest } = slice.actions
export default slice.reducer
