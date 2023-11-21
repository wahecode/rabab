import TabView, { TabPanel } from '@/app/common/TabView';
import React from 'react'
import RequestTabs from '../RequestTabs';


export default function RequestPanel() {
    const request = {};
    if (request) {
        request.params = [];
        request.params.push({
            name: 'boolId',
            value: 'a12345',
            description: 'my desc',
            selected: true
        })
    }
    return (
        <div className='' id='requestPanel'>
            <TabView>
                <TabPanel header='First'>
                    <div className='pt-2'>
                        <EndPointUriBar />
                        <div>
                            <RequestTabs request={request} />
                        </div>
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}



export function EndPointUriBar() {
    return (
        <div className='flex w-full p-1 border border-rabab'>
            <div className='border-r  '>
                <select className='dark:bg-black outline-none'>
                    <option value='GET'>GET</option>
                    <option value='POST'>POST</option>
                    <option value='DELETE'>DELETE</option>
                </select>
            </div>
            <div className='w-full'>
                <input type='text' name='uri' id='uri' className='dark:bg-black w-full outline-none' />
            </div>
            <div className='pr-1'><button className='bg-blue-600 w-12'>Send</button></div>
            <div><button className='bg-blue-600 w-12'>Save</button></div>
        </div>
    )
}


