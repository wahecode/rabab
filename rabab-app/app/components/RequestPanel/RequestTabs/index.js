import TabView, { TabPanel } from '@/app/common/TabView'
import React, { useEffect, useState } from 'react'
import Params from './Params'
import Body from './Body'
import { getRequestExtensibleCopy } from '@/lib/RequestUtil'

export default function RequestTabs({ request, onChange }) {
    const [inputRequest, setInputRequest] = useState(request);

    useEffect(() => {
        setInputRequest(request)
    }, [request])

    const onParamsChangeHandler = (params) => {
        const localRequest = getRequestExtensibleCopy(request);
        localRequest.params = params;
        setInputRequest(localRequest);
        if (onChange) {
            onChange(localRequest);
        }

    }

    const onHeadersChangeHandler = (headers) => {
        const localRequest = getRequestExtensibleCopy(request);
        localRequest.headers = headers;
        setInputRequest(localRequest);
        if (onChange) {
            onChange(localRequest);
        }
    }

    return (
        <TabView>
            <TabPanel header="Params">
                <Params params={inputRequest.params} onChange={onParamsChangeHandler} />
            </TabPanel>
            <TabPanel header="Headers">
                <Params params={inputRequest.headers} onChange={onHeadersChangeHandler} />
            </TabPanel>
            <TabPanel header="Body">
                <Body />
            </TabPanel>
        </TabView>
    )
}
