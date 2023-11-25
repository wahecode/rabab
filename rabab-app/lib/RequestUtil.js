export function getRequestExtensibleCopy(request) {
    return {
        id: request.id,
        name: request.name,
        collectionId: request.collectionId,
        uri: request.uri,
        method: request.method,
        params: [...request.params],
        headers: [...request.headers],
    }
}
