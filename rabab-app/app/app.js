'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import PanelContainer from './components/PanelContainer'
import ResizeablePanel from './components/PanelContainer/ResizeablePanel'
import Panel from './components/PanelContainer/Panel'
import NavigationContainer from './components/NavigationContainer'
import SideWindow from './components/SideWindow'
import RequestPanel from './components/RequestPanel'

export default function App(props) {
    const { theme } = useSelector((state) => state.theme)
    return (
        <div className={theme}>
            <div className="bg-slate-50 dark:bg-gray-950 text-black dark:text-slate-200">
                <NavigationContainer />
                <PanelContainer>
                    <ResizeablePanel
                        minwidth="300px"
                        maxwidth="500px"
                        className="bg-gray-200 dark:bg-gray-900"
                    >
                        <SideWindow />
                    </ResizeablePanel>

                    <Panel>
                        <PanelContainer>
                            <ResizeablePanel minwidth="500px" maxwidth="1000px">
                                <RequestPanel />
                            </ResizeablePanel>
                            <Panel>Right Panel</Panel>
                        </PanelContainer>
                    </Panel>
                </PanelContainer>
            </div>
        </div>
    )
}
