'use client'
import React from "react";
import { store } from '../../store';
import { Provider } from "react-redux";


export default function ReduxProvider(props) {
    return (
        <Provider store={store}>{props.children}</Provider>
    )
}
