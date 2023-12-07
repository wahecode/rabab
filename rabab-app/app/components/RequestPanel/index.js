import TabView, { TabPanel } from '@/app/common/TabView'
import React from 'react'
import RequestTabs from './RequestTabs'
import { EndPointUriBar } from './EndpointUriBar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateConsole } from '@/app/slices/consoleSlice'
import { updateRequest } from '@/app/slices/collectionSlice'
import { refreshOpenRequest } from '@/app/slices/requestSlice'
var FileSaver = require('file-saver')
export default function RequestPanel({ request }) {
    const dispatch = useDispatch()

    const onChangeHandler = (request) => {
        dispatch(refreshOpenRequest({ request }))
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
        alert(JSON.stringify(request))
        // var file = new File(['Hello, world!'], 'hello_world.txt', {
        //     type: 'text/plain;charset=utf-8',
        // })

        // FileSaver.saveAs(file)
        dispatch(updateRequest(request))




    }

    return (
        <div className="pt-2">
            <EndPointUriBar
                method={request.method}
                uri={request.uri}
                onChange={onChangeHandler}
                onSend={onSendHandler}
                onSave={onSaveHandler}
            />
            <RequestTabs request={request} onChange={onChangeHandler} />
        </div>
    )
}
