import { toggleTheme } from '@/app/slices/themeToggleSlice'
import { useDispatch } from 'react-redux'
import React from 'react'
import Link from 'next/link'

export default function NavigationContainer() {
    const dispatch = useDispatch()
    return (
        <div className="h-11 w-full border-b border-gray-500">
            <button className="bg-gray-500 rounded-sm p-1" onClick={() => dispatch(toggleTheme())}>
                {' '}
                Toggle Theme
            </button>
        </div>
    )
}
