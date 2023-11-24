import React from 'react'

export default function Button({ onClick, children }) {
    return (
        <button className='bg-blue-600 h-full px-1' onClick={onClick}>{children}</button>
    )
}
