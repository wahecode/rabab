'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import PanelContainer from './components/PanelContainer';
import ResizeablePanel from './components/PanelContainer/ResizeablePanel';
import Panel from './components/PanelContainer/Panel';
import { Tree } from './components/Tree/Tree';
import NavigationContainer from './components/NavigationContainer';
import SideWindow from './components/SideWindow';

export default function App(props) {
    // const collections = [
    //     {
    //         id: "0",
    //         label: "Node 1",
    //         children: [
    //             {
    //                 id: "0-0",
    //                 label: "Node 1-1",
    //             },
    //             {
    //                 id: "0-2",
    //                 label: "Node 1-2",
    //             },
    //         ],
    //     },
    // ];
    const theme = useSelector((state) => state.theme.value)
    return (
        <div className={theme}>
            <div className='bg-slate-50 dark:bg-gray-950 text-black dark:text-slate-200'>
                <NavigationContainer />
                <PanelContainer>
                    <ResizeablePanel minwidth="300px" maxwidth="500px" className="bg-gray-200 dark:bg-gray-900">
                        {/* <Tree data={collections} /> */}
                        <SideWindow />
                    </ResizeablePanel>

                    <Panel>
                        <PanelContainer>
                            <ResizeablePanel minwidth="500px" maxwidth="1000px">Center Panel</ResizeablePanel>
                            <Panel>Right Panel</Panel>
                        </PanelContainer>
                    </Panel>
                </PanelContainer>
            </div>
        </div>
    );
}
