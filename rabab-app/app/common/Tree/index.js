import React from 'react'

export default function Tree({ key, children }) {
    return (
        <ul className='flex flex-col p-0'>{children}</ul>
    )
}

export function TreeNode({ key, children }) {
    return (
        <li key={key} className='px-5'>{children}</li>
    )
}

