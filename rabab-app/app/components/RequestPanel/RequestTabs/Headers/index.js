import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'
import React, { useState } from 'react'

export default function Headers({ request, onChange }) {
    const [headers, setHeaders] = useState(request.headers)
    const [, setState] = useState(false)

    const onChangeHandler = (header) => {
        const index = request.headers.findIndex((x) => {
            if (x) {
                return x.name === header.name
            }
        })

        request.headers[index] = header
        if (onChange) {
            onChange(request)
        }
    }

    const onDeleteHandler = (header) => {
        const headers = request.headers.filter((x) => {
            return x.name != header.name
        })

        request.headers = headers
        if (onChange) {
            onChange(request)
        }
        setHeaders(headers) // local state
    }
    const onNewClickHandler = () => {
        request.headers.push({ name: '', value: '', description: '', selected: false })
        if (onChange) {
            onChange(request)
        }
        setHeaders(request.headers)
        setState((perv) => !perv)
    }

    return (
        <div>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className=" w-6 pl-2 pr-2 border-rabab pt-1 pb-1"></td>
                        <td className=" border-rabab border-t-0 border-l-0  p-1">KEY</td>
                        <td className=" border-rabab border-t-0 border-l-0  p-1">VALUE</td>
                        <td className=" border-rabab border-t-0 border-l-0  p-1">DESCRIPTION</td>
                        <td className="w-16 pl-2 pr-2 border-rabab border-r-0">DELETE</td>
                    </tr>

                    {headers &&
                        headers.map((p, index) => {
                            return (
                                <HeaderRow
                                    key={index}
                                    header={p}
                                    onChange={onChangeHandler}
                                    onDelete={onDeleteHandler}
                                />
                            )
                        })}
                </tbody>
            </table>
            <div className="pt-1">
                <Button onClick={onNewClickHandler}>New</Button>
            </div>
        </div>
    )
}

function HeaderRow({ header, onChange, onDelete }) {
    const onChangeHandler = (name, newValue) => {
        header[name] = newValue
        if (onChange) {
            onChange(header)
        }
    }

    const onClickHandler = () => {
        onDelete(header)
    }

    return (
        <tr>
            <td className=" pl-2 pr-2 border bg-rabab-border pt-1 pb-1">
                <CheckBoxColumn
                    name="selected"
                    value={header.selected}
                    onChange={onChangeHandler}
                />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="name" value={header.name} onChange={onChangeHandler} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="value" value={header.value} onChange={onChangeHandler} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText
                    name="description"
                    value={header.description}
                    onChange={onChangeHandler}
                />
            </td>
            <td className=" border border-t-0 border-l-0 bg-rabab-border">
                <button
                    className="bg-blue-600 pl-2 pr-2 border-rabab border-r-0 h-full"
                    onClick={onClickHandler}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

function CheckBoxColumn({ name, value, onChange }) {
    const [val, setVal] = useState(value)

    const onChangeHandler = (e) => {
        setVal(e.target.checked)
        if (onChange) {
            onChange(name, e.target.checked)
        }
    }

    return (
        <input
            type="checkbox"
            checked={val}
            onChange={(e) => {
                onChangeHandler(e)
            }}
        />
    )
}
