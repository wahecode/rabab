'use client'
import React, { useState } from 'react'
import { Tree } from '../Tree'
import Image from 'next/image'
import rightArrow from '../../../../public/fast-arrow-right.svg'
import downArrow from '../../../../public/fast-arrow-down.svg'

export default function TreeNode({ node }) {
    const [expand, setExpand] = useState(false)

    const hasChildren = node.children ? true : false

    return (
        <li className="px-5" key={node.id}>
            <div className="flex" onClick={(e) => setExpand((v) => !v)}>
                <div className="tree-head pr-px">{node.label}</div>
                {hasChildren &&
                    (expand ? (
                        <Image src={downArrow} className="color" />
                    ) : (
                        <Image src={rightArrow} className="color" />
                    ))}
            </div>

            {hasChildren && expand && (
                <div className="tree-component">
                    <Tree data={node.children} />
                </div>
            )}
        </li>
    )
}
