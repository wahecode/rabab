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
        addRequest: (state, action) => {
            const collectionId = action.payload.collectionId;

            const collection = state.collections.find((col) => col.id = collectionId);
            collection.requests.push(action.payload.request);
        },
        updateRequest: (state, action) => {
            const collectionId = action.payload.collectionId;
            const request = action.payload.request;

            const collection = state.collections.find((col) => col.id = collectionId);

            const index = collection.request.requests.findIndex(x => x.id == request.id);

            collection.requests[index] = request;
        },
    },
})

export const { addCollection, addRequest, updateRequest } = slice.actions;
export default slice.reducer;
