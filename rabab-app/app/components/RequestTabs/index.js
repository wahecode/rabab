import TabView, { TabPanel } from '@/app/common/TabView'
import React, { useState } from 'react'
import Params from './Params';

export default function RequestTabs({ request }) {

    const [selectedTabId, setSelectedTabId] = useState('params');

    return (
        <TabView>
            <TabPanel header='Params'><Params request={request} /></TabPanel>
            <TabPanel header='Authorization'>Authorization</TabPanel>
            <TabPanel header='Body'>Body</TabPanel>
        </TabView>
    )
}
