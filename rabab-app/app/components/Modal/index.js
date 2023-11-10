import React from 'react'

export default function Modal({ isVisible, children, onCloseHanlder }) {
    if (isVisible) {
        return (
            <div className='fixed inset-0 bg-black dark:bg:white bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='flex flex-col'>
                    <button className='text-xl place-self-end' onClick={onCloseHanlder}>X</button>
                    <div className='bg-white p-2 border rounded-xl w-96 h-64'>
                        {children}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
