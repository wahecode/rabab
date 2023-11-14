'use client'

import { addCollection } from '@/app/slices/collectionSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ShowErrors from '../ShowErrors'



export default function NewRequestModal({ collectionId, isVisible, closeModalHandler }) {
    const initialState = {
        name: '',
        errors: [],
    }
    const [state, setState] = useState(initialState)
    const dispatch = useDispatch()

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
            errors.push('Please enter request name')
        }
        if (errors.length > 0) {
            setState((prevProps) => ({
                ...prevProps,
                ['errors']: errors,
            }))
            return false
        }
        return true
    }

    const onSaveHandler = (e) => {
        e.preventDefault()

        if (validateForm()) {
            dispatch(
                addRequest({
                    name: state.name,
                    requests: [],
                })
            ) // store collection into redux

            setState({ ...initialState }) // clear form
            closeModalHandler()
        }
    }

    if (isVisible) {
        return (
            <div className="modal-shadow" id="my-modal">
                <div className="modal-body ">
                    <h3 className="text-xl leading-6 font-medium pb-10 mx-32">
                        Add New Request
                    </h3>
                    {/* show errors  */}
                    <ShowErrors errors={state.errors} />
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
