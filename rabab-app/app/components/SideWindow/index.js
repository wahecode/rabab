'use client'
import { useState } from 'react'
import NewCollectionModal from './NewCollectionModal'
import { Tree } from '../Tree/Tree'
import { useSelector } from 'react-redux'

export default function SideWindow() {

    const { collections } = useSelector(state => state.collections)


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

            {/* <Tree data={collections} /> */}
            {JSON.stringify(collections)}
        </div>
    )
}
