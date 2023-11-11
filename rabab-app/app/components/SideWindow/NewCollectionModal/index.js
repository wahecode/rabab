'use client'


import { addCollection } from '@/app/slices/collectionSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const showErrorMessages = (errors) => {
    if (!errors || errors.length == 0) {
        return null;
    }

    return <div className='w-auto mb-2 mx-8 border text-center items-center bg-gray-200 text-red-500 dark:bg-red-500 dark:text-white rounded-xl'>
        <ul class="list-none pl-5 ">
            {errors.map(error => {
                return <li className="my-2">{error}</li>
            })}
        </ul>
    </div>
}

export default function NewCollectionModal({ isVisible, closeModalHandler }) {
    const initialState = {
        name: '',
        location: '',
        errors: [],
    }
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();

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
    const validateForm = () => {
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
            return false;
        }
        return true;
    }


    const onSaveHandler = (e) => {
        e.preventDefault()

        if (validateForm()) {

            dispatch(addCollection({
                name: state.name,
                requests: []
            })); // store collection into redux

            setState({ ...initialState }); // clear form
            closeModalHandler()
        }
    }



    if (isVisible) {
        return (
            <div className="modal-shadow" id="my-modal">
                <div className="modal-body ">

                    <h3 className="text-xl leading-6 font-medium pb-10 mx-32">
                        Add New Collection
                    </h3>
                    {/* show errors  */}
                    {showErrorMessages(state.errors)}
                    <div>
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

                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}
