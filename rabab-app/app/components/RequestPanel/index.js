import TabView, { TabPanel } from '@/app/common/TabView';
import React from 'react'
import RequestTabs from '../RequestTabs';
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

const getTabContentHtml = () => {
    return (
        <div className='pt-2'>
            <div className='flex w-full p-1 border border-gray-700'>
                <div className='border-r border-gray-700 '>
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
                <RequestTabs />
            </div>
        </div>
    )
}

export default function RequestPanel() {
    return (
        <div className='' id='requestPanel'>
            <TabView>
                <TabPanel header='First'>{getTabContentHtml()}</TabPanel>
            </TabView>
        </div>
    )
}
