import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'requests',
    initialState: {
        requests: [],
    },
    reducers: {
        addNewRequest: (state, action) => {
            let name = 'New Request'
            if (state.requests) {
                const count = state.requests.filter(req => req.name.startsWith('New Request')).length;
                if (count > 0) {
                    name = 'New Request ' + (count);
                }
            }

            state.requests.push({
                id: Math.random(),
                name: name,
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
