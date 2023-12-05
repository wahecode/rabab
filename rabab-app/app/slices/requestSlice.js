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
        refreshOpenRequest: (state, action) => {
            const request = action.payload.request;
            if (state.requests) {
                const index = state.requests.findIndex(req => req.id == request.id);

                if (index != -1) {
                    state.requests[index] = request;
                }

            }
        }
    }
})

export const { addNewRequest, refreshOpenRequest } = slice.actions
export default slice.reducer
