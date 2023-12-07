import TabView, { TabPanel } from '@/app/common/TabView'
import { getRequestExtensibleCopy } from '@/lib/RequestUtil'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RequestPanel from '../RequestPanel'

export default function CenterWindow() {
    const { requests } = useSelector((state) => state.requests)
    const [currentRequest, setCurrentRequest] = useState(null);

    const onSelectionHandler = (requestId) => {

        let request = requests.find(req => req.id == requestId);
        request = getRequestExtensibleCopy(request)
        setCurrentRequest(request);
    }
    return (
        <div>
            <TabView onSelection={requestId => { onSelectionHandler(requestId) }}>
                {requests.map((request) => {

                    return (
                        <TabPanel header={request.name} id={request.id}>

                        </TabPanel>
                    )
                })}
            </TabView>

            {currentRequest && <RequestPanel request={currentRequest} />}

        </div>

    )
}


