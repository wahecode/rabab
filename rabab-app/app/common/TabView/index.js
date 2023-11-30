import React, { useState } from 'react'

export default function TabView({ children }) {
    const getTabNames = () => {
        const headers = []
        if (children) {
            if (Array.isArray(children)) {
                children.map((child) => {
                    headers.push(child.props.header)
                })
            } else {
                headers.push(children.props.header)
            }
        }
        return headers
    }

    const headers = getTabNames()
    const [selectedTabTitle, setSelectedTab] = useState(headers ? headers[0] : '')


    const getTabContentHtml = () => {
        if (Array.isArray(children)) {
            return children.find((element) => element.props.header == selectedTabTitle)
        } else {
            return children
        }
    }

    return (
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center "
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist"
                >
                    {headers.map((header) => {
                        return <TabHeader tabTitle={header} selected={selectedTabTitle == header}
                            onClick={title => {
                                setSelectedTab(title)
                            }} />
                    })}
                </ul>
            </div>
            <div>{getTabContentHtml(selectedTabTitle)}</div>
        </div>
    )
}

export function TabPanel({ header, children }) {
    return <div id={header}>{children}</div>
}

function TabHeader({ selected, tabTitle, onClick }) {
    const selectedClassName = selected
        ? 'inline-block p-2  rounded-t-lg border-b-2 border-black dark:border-slate-200'
        : 'inline-block p-2  rounded-t-lg '
    return (
        <li
            key={Math.random()}
            className="me-2"
            role="presentation"
            onClick={() => {
                if (tabTitle) {
                    onClick(tabTitle)
                }
            }}
        >
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