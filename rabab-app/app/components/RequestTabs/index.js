import TabView, { TabPanel } from '@/app/common/TabView'
import React, { useState } from 'react'
import Params from './Params';

export default function RequestTabs({ request, onChange }) {

    const onChangeHandler = (request) => {
        if (onChange) {
            onChange(request);
        }
    }

    return (
        <TabView>
            <TabPanel header='Params'>
                <Params request={request} onChange={onChangeHandler} />
            </TabPanel>
            <TabPanel header='Authorization'>
                Authorization
            </TabPanel>
            <TabPanel header='Body'>
                Body
            </TabPanel>
        </TabView>
    )
}
