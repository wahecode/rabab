import React, { useState } from 'react'

export default function TabView({ children, onSelection }) {

    const kids = Array.isArray(children) ? children : [children];



    const [selectedTabTitle, setSelectedTab] = useState(kids[0] ? kids[0].props.header : '')


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
                    {kids.map((kid) => {
                        return <TabHeader tabTitle={kid.props.header} selected={selectedTabTitle == kid.props.header}
                            onClick={title => {
                                setSelectedTab(title)
                                if (onSelection) {
                                    onSelection(kid.props.id);
                                }
                            }} />
                    })}
                </ul>
            </div>
            {getTabContentHtml(selectedTabTitle)}
        </div>
    )
}

export function TabPanel({ id, header, children }) {
    return <div id={id}>{children}</div>
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