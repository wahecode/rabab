import React from 'react'

export default function ShowErrors({ errors }) {
    if (!errors || errors.length == 0) {
        return null
    }

    return (
        <div className="w-auto mb-2 mx-8 border text-center items-center bg-gray-200 text-red-500 dark:bg-red-500 dark:text-white rounded-xl">
            <ul className="list-none pl-5 ">
                {errors.map((error) => {
                    return (
                        <li key={Math.random()} className="my-2">
                            {error}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
