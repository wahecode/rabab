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
                        <div>
                            <RequestTabs request={request} />
                        </div>
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}

const getTabHtml = (tabTitle, isSelected) => {

    const selectedClassName = isSelected ? 'inline-block p-2  rounded-t-lg border-b-2 border-black dark:border-slate-200' : 'inline-block p-2  rounded-t-lg ';



    return (
        <li className="me-2" role="presentation">
            <button
                className={selectedClassName}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
            >
                {tabTitle}
            </button>
        </li>
    )
}
