'use client'
import React from 'react'
import TreeNode from './TreeNode/TreeNode'

export const Tree = ({ data = [] }) => {
    return (
        <div className="tree">
            <ul className="flex tree-container flex-col p-0">
                {data.map((tree) => (
                    <TreeNode node={tree} />
                ))}
            </ul>
        </div>
    )
}
