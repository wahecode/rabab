import React from 'react'
const getTabHtml = (tabContent) => {
    return (
        <li className="me-2" role="presentation">
            <button
                className="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
            >
                {tabContent}
            </button>
        </li>
    )
}

const getTabContentHtml = () => {
    return (
        <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
        >
            <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{' '}
                <strong className="font-medium text-gray-800 dark:text-white">
                    Profile tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one for the next.
                The tab JavaScript swaps classes to control the content visibility and
                styling.
            </p>
        </div>
    )
}

export default function RequestPanel() {
    return (
        <div className='z-0'>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist"
                >
                    {getTabHtml("First")}


                </ul>
            </div>
            <div id="default-tab-content">
                {getTabContentHtml()}
                {getTabContentHtml()}

            </div>
        </div>
    )
}
