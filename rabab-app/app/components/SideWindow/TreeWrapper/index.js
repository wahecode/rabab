import React from 'react'
import { Tree } from '../../Tree/Tree'
import TreeService from '@/lib/TreeService';

export default function TreeWrapper({ collections }) {

    const collectionMenu = [
        {
            "label": "New Request",
            "onClickHandler": () => {
                openNewRequestModalHandler();
            }
        }
    ]

    return (
        <Tree data={TreeService.transformCollectionData(collections)} />
    )
}
