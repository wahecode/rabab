import React, { useEffect, useState } from 'react'

export default function InputText({ name, value, onChange }) {
    const [val, setVal] = useState(value)

    const onChangeHandler = (e) => {
        setVal(e.target.value)
        if (onChange) {
            onChange(name, e.target.value)
        }
    }

    useEffect(() => {
        setVal(value)
    }, [value])


    return (
        <div>
            <input
                type="text"
                value={val}
                onChange={onChangeHandler}
                className="dark:bg-black w-full h-full outline-none dark:focus:bg-gray-700"
            />
        </div>
    )
}
