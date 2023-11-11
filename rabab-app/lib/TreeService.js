export const TreeService = {
    transformCollectionData: (collections = []) => {
        const treeNodes = []
        if (collections && collections.length > 0) {
            collections.forEach((col) => {
                treeNodes.push(convertCollectionToNode(col))
            })
        }
        return treeNodes
    },
}

const convertCollectionToNode = (collection) => {
    return {
        id: collection.id,
        label: collection.name,
        children: convertRequestsToNodes(collection.requests),
    }
}

const convertRequestsToNodes = (requests) => {
    return []
}

export default TreeService
