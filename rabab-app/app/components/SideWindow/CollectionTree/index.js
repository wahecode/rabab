import Tree, { TreeNode } from '@/app/common/Tree'
import DottedMenu from '@/app/common/Tree/DottedLMenu'
import React from 'react'

export default function CollectionTree({ collections }) {

    const menuItems = [
        { 'id': 1, label: 'New Request' },
        { 'id': 2, label: 'Rename' },
        { 'id': 3, label: 'Delete' },
    ];

    const onMenuClickHandler = (item) => {
        if (item && item.id == 1) {
            // open new request modal
        }
    }


    return (
        <Tree>
            {collections.map(col => {
                return <TreeNode key={col.id}>
                    <div className='flex'>
                        <div className='text-sm'>{col.name}</div>
                        <DottedMenu items={menuItems} onClickHandler={onMenuClickHandler} />
                    </div>
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
