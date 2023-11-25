import React from 'react'
import { useSelector } from 'react-redux'

export default function Console() {
    const { status, logs } = useSelector((state) => state.consoleData)
    return (
        <div>
            <div>{status}</div>
            <div>{logs}</div>
        </div>
    )
}
