import React from 'react'

export default function Params({ request }) {

    return (
        <div>
            <div className='flex'>
                <div className=' pl-2 pr-2 border border-gray-700 pt-1 pb-1'>
                    <input type='checkbox' />
                </div>
                <div className='w-full border border-t-0 border-l-0 border-gray-700 p-1' >Key</div>
                <div className='w-full border border-t-0 border-l-0 border-gray-700 p-1' >Value</div>
                <div className='w-full border border-t-0 border-l-0 border-gray-700 p-1' >Description</div>
            </div>

            <ParamsRow />
            <ParamsRow />
            <ParamsRow />
            <ParamsRow />
            <ParamsRow />
        </div>
    )
}

function ParamsRow() {
    return (
        <div className='flex '>
            <div className=' pl-2 pr-2 border border-gray-700 pt-1 pb-1'>
                <input type='checkbox' />
            </div>
            <InputColumn name='name' />
            <InputColumn name='value' />
            <InputColumn name='description' />
        </div>
    )
}

function InputColumn({ name }) {
    return (
        <div className='w-full border border-t-0 border-l-0 border-gray-700 p-1' >
            <input type='text' name={name} id={name} className='dark:bg-black w-full h-full outline-none dark:focus:bg-gray-700' />
        </div>
    )
}