import React, { useEffect, useState } from 'react'

export default function Params({ request, onChange }) {

    const onChangeHandler = (param, index) => {
        request.params[index] = param;
        if (onChange) {
            onChange(request);
        }
    }


    return (
        <div>
            <div className='flex'>
                <div className=' pl-2 pr-2 border-rabab pt-1 pb-1'>
                    <input type='checkbox' onChange={(e) => {
                        //alert(JSON.stringify(request));
                    }} />
                </div>
                <div className='w-full border-rabab border-t-0 border-l-0  p-1' >Key</div>
                <div className='w-full border-rabab border-t-0 border-l-0  p-1' >Value</div>
                <div className='w-full border-rabab border-t-0 border-l-0  p-1' >Description</div>
            </div>
            {request && request.params && request.params.map(p => {
                return <ParamsRow param={p} onChange={onChangeHandler} />
            })}
        </div>
    )
}

function ParamsRow({ param, onChange }) {
    const onChangeHandler = (name, newValue) => {
        //alert(newValue);
        param[name] = newValue;
        if (onChange) {
            onChange(param);
        }
    }

    return (
        <div className='flex '>
            <CheckBoxColumn name='selected' value={param.selected} onChange={onChangeHandler} />
            <InputColumn name='name' value={param.name} onChange={onChangeHandler} />
            <InputColumn name='value' value={param.value} onChange={onChangeHandler} />
            <InputColumn name='description' value={param.description} onChange={onChangeHandler} />
        </div>
    )
}

function CheckBoxColumn({ name, value, onChange }) {
    const [val, setVal] = useState(value);

    const onChangeHandler = (e) => {
        setVal(e.target.checked);
        if (onChange) {
            onChange(name, e.target.checked);
        }
    }

    return (
        <div className=' pl-2 pr-2 border bg-rabab-border pt-1 pb-1'>
            <input type='checkbox'
                checked={val}
                onChange={e => {
                    onChangeHandler(e)
                }}
            />
        </div>
    )
}

function InputColumn({ name, value, onChange }) {

    const [val, setVal] = useState(value);

    const onChangeHandler = (e) => {
        setVal(e.target.value);
        if (onChange) {
            onChange(name, e.target.value);
        }
    }

    return (
        <div className='w-full border border-t-0 border-l-0 bg-rabab-border p-1' >
            <input type='text' value={val}
                onChange={onChangeHandler}
                className='dark:bg-black w-full h-full outline-none dark:focus:bg-gray-700' />
        </div>
    )
}