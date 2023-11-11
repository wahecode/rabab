'use client'
import { useState } from 'react'
import NewCollectionModal from './NewCollectionModal'
import { Tree } from '../Tree/Tree'
import { useSelector } from 'react-redux'

export default function SideWindow() {
    const { collections } = useSelector((state) => state.collections)

    const { theme } = useSelector((state) => state.theme)

    const [newCollectionModalVisible, setNewCollectionModalVisible] = useState(false)

    const closeNewCollectionModalHandler = () => {
        setNewCollectionModalVisible(false)
    }

    const openNewCollectionModalHandler = () => {
        setNewCollectionModalVisible(true)
    }
    return (
        <div>
            <NewCollectionModal
                isVisible={newCollectionModalVisible}
                closeModalHandler={closeNewCollectionModalHandler}
            />
            <button onClick={openNewCollectionModalHandler}>Add Collection</button>

            {collections.map((collection) => {
                return (
                    <p>
                        <button> {collection.name}</button>
                    </p>
                )
            })}
        </div>
    )
}
