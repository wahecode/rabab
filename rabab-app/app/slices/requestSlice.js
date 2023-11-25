import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'requests',
    initialState: {
        requests: [],
    },
    reducers: {
        addNewRequest: (state) => {
            state.requests.push({
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
