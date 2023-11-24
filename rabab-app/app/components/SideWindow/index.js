'use client'
import { useState } from 'react'
import NewCollectionModal from './NewCollectionModal'
import { useSelector } from 'react-redux'
import NewRequestModal from './NewRequestModal'
import CollectionTree from './CollectionTree'

export default function SideWindow() {
    const { collections } = useSelector((state) => state.collections)

    const [newCollectionModalVisible, setNewCollectionModalVisible] = useState(false)
    const [newRequestModalVisible, setNewRequestModalVisible] = useState(false)

    const closeNewCollectionModalHandler = () => {
        setNewCollectionModalVisible(false)
    }

    const openNewCollectionModalHandler = () => {
        setNewCollectionModalVisible(true)
    }

    const closeNewRequestModalHandler = () => {
        setNewRequestModalVisible(false)
    }

    const openNewRequestModalHandler = () => {
        setNewRequestModalVisible(true)
    }

    return (
        <div>
            <NewCollectionModal
                isVisible={newCollectionModalVisible}
                closeModalHandler={closeNewCollectionModalHandler}
            />
            <NewRequestModal
                isVisible={newRequestModalVisible}
                closeModalHandler={closeNewCollectionModalHandler}
            />
            <button onClick={openNewCollectionModalHandler}>Add Collection</button>

            <CollectionTree collections={collections} />
        </div>
    )
}
