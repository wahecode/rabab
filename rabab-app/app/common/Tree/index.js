import React from 'react'

export default function Tree({ key, children }) {
    return <ul className="flex flex-col p-0">{children}</ul>
}

export function TreeNode({ children }) {
    return (
        <li key={Math.random()} className="px-5">
            {children}
        </li>
    )
}
