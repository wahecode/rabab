import TabView, { TabPanel } from '@/app/common/TabView'
import React, { useEffect, useState } from 'react'
import RequestTabs from './RequestTabs'
import { EndPointUriBar } from './EndpointUriBar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateConsole } from '@/app/slices/consoleSlice'
import { updateRequest } from '@/app/slices/collectionSlice'
import { refreshOpenRequest } from '@/app/slices/requestSlice'
import { getRequestExtensibleCopy } from '@/lib/RequestUtil'
var FileSaver = require('file-saver')
export default function RequestPanel({ request }) {

    const dispatch = useDispatch()
    const [inputRequest, setInputRequest] = useState(request);
    useEffect(() => {
        setInputRequest(request)
        //alert('finally request panel changed' + JSON.stringify(request, null, 4));
    }, [request]);




    const onEndpointBarChangeHandler = (data) => {
        const localRequest = getRequestExtensibleCopy(inputRequest);
        localRequest.uri = data.uri;
        localRequest.method = data.method;
        setInputRequest(localRequest);
        dispatch(refreshOpenRequest({ request: localRequest }))
    }

    const onRequestTabChangeHandler = (localRequest) => {
        setInputRequest(localRequest);
        dispatch(refreshOpenRequest({ request: localRequest }))
    }

    const onSendHandler = () => {
        //alert(JSON.stringify(request, null, 2))
        axios
            .get('http://localhost:8080/api/v1/employee/', {
                params: {
                    ID: 12345,
                },
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error.toJSON())
                dispatch(
                    updateConsole({
                        status: 'failure',
                        logs: JSON.stringify(error),
                    })
                )

            })
            .finally(function () {
                // always executed
            })
    }

    const onSaveHandler = () => {
        alert(JSON.stringify(inputRequest))
        // var file = new File(['Hello, world!'], 'hello_world.txt', {
        //     type: 'text/plain;charset=utf-8',
        // })

        // FileSaver.saveAs(file)
        dispatch(updateRequest(inputRequest))




    }

    return (
        <div className="pt-2">
            <EndPointUriBar
                method={inputRequest.method}
                uri={inputRequest.uri}
                onChange={onEndpointBarChangeHandler}
                onSend={onSendHandler}
                onSave={onSaveHandler}
            />
            <RequestTabs request={inputRequest} onChange={onRequestTabChangeHandler} />
        </div>
    )
}
