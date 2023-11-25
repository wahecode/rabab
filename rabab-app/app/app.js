'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import SideWindow from './components/SideWindow'
import RequestPanel from './components/RequestPanel'
import Splitter from './common/Splitter'
import SplitPanel from './common/Splitter/SplitPanel'
import NavigationContainer from './components/NavigationContainer'
import Panel from './common/Splitter/Panel'
import Console from './components/Console'

export default function App(props) {
    const { theme } = useSelector((state) => state.theme)
    return (
        <div className={theme}>
            <div className="bg-rabab text-black dark:text-slate-200 text-xs">
                <NavigationContainer />
                <Splitter>
                    <SplitPanel
                        minwidth="300px"
                        maxwidth="500px"
                        className="bg-gray-200 dark:bg-gray-900"
                    >
                        <SideWindow />
                    </SplitPanel>

                    <Panel>
                        <Splitter>
                            <SplitPanel minwidth="500px" maxwidth="1000px">
                                <RequestPanel />
                            </SplitPanel>
                            <Panel>
                                <Console />
                            </Panel>
                        </Splitter>
                    </Panel>
                </Splitter>
            </div>
        </div>
    )
}
