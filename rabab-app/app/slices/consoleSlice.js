import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'consoleData',
    initialState: {
        status: null,
        logs: null,
    },
    reducers: {
        updateConsole: (state, action) => {
            state.status = action.payload.status
            state.logs = action.payload.logs
        },
    },
})

export const { updateConsole } = slice.actions
export default slice.reducer
