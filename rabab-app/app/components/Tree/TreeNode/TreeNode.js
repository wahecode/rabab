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
            <div className="" onClick={(e) => setExpand((v) => !v)}>
                <div className="tree-head pr-px">{node.label}</div>
                <p >Add Request</p>
                {getTreeArrowIcon()}
            </div>

            {hasChildren && expand && (
                <div className="tree-component">
                    <Tree data={node.children} />
                </div>
            )}
        </li>
    )
}

const getTreeArrowIcon = (hasChildren, expand) => {

    if (hasChildren) {
        if (expand) {
            return <Image src={downArrow} className="color" />;
        }
        <Image src={rightArrow} className="color" />
    }
    return null;
}
