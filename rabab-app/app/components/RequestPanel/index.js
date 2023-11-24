import TabView, { TabPanel } from '@/app/common/TabView';
import React from 'react'
import RequestTabs from '../RequestTabs';
import { EndPointUriBar } from './EndpointUriBar';


export default function RequestPanel() {
    const request = {
        url: ''
    };
    if (request) {
        request.params = [];
        request.params.push({
            name: 'boolId',
            value: 'a12345',
            description: 'my desc',
            selected: true
        })
    }

    const onChangeHandler = (request) => {
        // this.request = request
    }
    const onSendHandler = () => {
        alert(JSON.stringify(request))
    }

    const onSaveHandler = () => {
        alert(JSON.stringify(request))
    }

    return (
        <div className='' id='requestPanel'>
            <TabView>
                <TabPanel header='First'>
                    <div className='pt-2'>
                        <EndPointUriBar request={request} onChange={onChangeHandler} onSend={onSendHandler} onSave={onSaveHandler} />
                        <RequestTabs request={request} onChange={onChangeHandler} />
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}






