import Tree, { TreeNode } from '@/app/common/Tree'
import React from 'react'

export default function CollectionTree({ collections }) {
    return (
        <Tree>
            {collections.map(col => {
                return <TreeNode key={col.id}>
                    <div>{col.name}</div>
                    {col.requests &&
                        <Tree>
                            {col.requests.map(req => {
                                return <TreeNode key={req.id}>
                                    {req.name}
                                </TreeNode>
                            })}
                        </Tree>
                    }
                </TreeNode>
            })}
        </Tree>
    )
}
