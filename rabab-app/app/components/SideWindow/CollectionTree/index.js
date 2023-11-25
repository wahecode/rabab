import Tree, { TreeNode } from '@/app/common/Tree'
import DottedMenu from '@/app/common/Tree/DottedLMenu'
import { addNewRequest } from '@/app/slices/requestSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function CollectionTree({ collections }) {
    const dispatch = useDispatch()
    const menuItems = [
        { id: 1, label: 'New Request' },
        { id: 2, label: 'Rename' },
        { id: 3, label: 'Delete' },
    ]

    const onMenuClickHandler = (item, collectionId) => {
        if (item && item.id == 1) {
            // open new request modal
            dispatch(
                addNewRequest({
                    collectionId,
                })
            )
        }
    }

    return (
        <Tree>
            {collections.map((col) => {
                return (
                    <TreeNode>
                        <div className="flex">
                            <div className="text-sm">{col.name}</div>
                            <DottedMenu
                                items={menuItems}
                                onClickHandler={(item) => onMenuClickHandler(item, col.id)}
                            />
                        </div>
                        {col.requests && (
                            <Tree>
                                {col.requests.map((req) => {
                                    return <TreeNode>{req.name}</TreeNode>
                                })}
                            </Tree>
                        )}
                    </TreeNode>
                )
            })}
        </Tree>
    )
}
