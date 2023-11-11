'use client'
import { useState } from 'react'
import NewCollectionModal from './NewCollectionModal'

export default function SideWindow() {
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
        </div>
    )
}
