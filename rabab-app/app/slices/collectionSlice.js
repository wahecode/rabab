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
            const request = action.payload.request
            const collectionId = request.collectionId

            const collection = state.collections.find((col) => (col.id = collectionId))
            collection.requests.push(request)
        },
        updateRequest: (state, action) => {

            const request = action.payload

            const collectionId = request.collectionId

            const collection = state.collections.find((col) => (col.id = collectionId))

            const index = collection.requests.findIndex((x) => x.id == request.id)

            if (index != -1) {
                collection.requests[index] = request
            } else {
                collection.requests.push(request)
            }

        },
    },
})

export const { addCollection, addRequest, updateRequest } = slice.actions
export default slice.reducer
