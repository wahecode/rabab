'use client'
import React, { useState } from 'react'

export default function NewCollectionModal({ isVisible, closeModalHandler }) {
    const initialState = {
        name: '',
        location: '',
        errors: [],
    }
    const [state, setState] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState((prevProps) => ({
            ...prevProps,
            [name]: value,
        }))
    }

    const onCancelHandler = (e) => {
        e.preventDefault()
        setState({ ...initialState })
        closeModalHandler()
    }

    const onSaveHandler = (e) => {
        e.preventDefault()
        const errors = []
        if (!state.name) {
            errors.push('Please enter collection name')
        } else if (!state.location) {
            errors.push('Please enter collection location')
        }
        if (errors.length > 0) {
            setState((prevProps) => ({
                ...prevProps,
                ['errors']: errors,
            }))
        } else {
            // Logic to save collection goes here

            setState({ ...initialState })
            closeModalHandler()
        }
    }

    if (isVisible) {
        return (
            <div className="modal-shadow" id="my-modal">
                <div className="modal-body">
                    <div className="mt-3 text-center">
                        <h3 className="text-xl leading-6 font-medium pb-10 mx-32">
                            Add New Collection
                        </h3>
                        {state.errors}
                        <form class="w-full ">
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/4">
                                    <label class="modal-label" for="inline-full-name">
                                        Name
                                    </label>
                                </div>
                                <div class="md:w-3/4 mr-6">
                                    <input
                                        className="modal-input"
                                        name="name"
                                        type="text"
                                        value={state.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/4">
                                    <label class="modal-label" for="inline-full-name">
                                        Location
                                    </label>
                                </div>
                                <div class="md:w-3/4 mr-6">
                                    <input
                                        className="modal-input"
                                        name="location"
                                        type="text"
                                        value={state.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="md:flex md:items-center px-12 ">
                                <button id="ok-btn" className="ok-btn" onClick={onSaveHandler}>
                                    Save
                                </button>
                                <button
                                    id="cancel-btn"
                                    className="cancel-btn"
                                    onClick={onCancelHandler}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}
