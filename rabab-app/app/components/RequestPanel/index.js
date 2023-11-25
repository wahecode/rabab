import TabView, { TabPanel } from '@/app/common/TabView'
import React from 'react'
import RequestTabs from './RequestTabs'
import { EndPointUriBar } from './EndpointUriBar'
import axios from 'axios';

export default function RequestPanel() {
    const request = {
        uri: '',
        method: 'GET',
        params: []
    }
    if (request) {

        request.params.push({
            name: 'boolId',
            value: 'a12345',
            description: 'my desc',
            selected: true,
        })
    }

    const onChangeHandler = (request) => {
        // this.request = request
    }
    const onSendHandler = () => {
        axios.get('https://dummy.restapiexample.com/api/v1/employee/', {
            params: {
                ID: 12345
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        }).finally(function () {
            // always executed
        });
    }

    const onSaveHandler = () => {
        alert(JSON.stringify(request))
    }

    return (
        <div className="" id="requestPanel">
            <TabView>
                <TabPanel header="First">
                    <div className="pt-2">
                        <EndPointUriBar
                            request={request}
                            onChange={onChangeHandler}
                            onSend={onSendHandler}
                            onSave={onSaveHandler}
                        />
                        <RequestTabs request={request} onChange={onChangeHandler} />
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}
