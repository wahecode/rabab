import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'
import React, { useEffect, useState } from 'react'

export default function Params({ request, onChange }) {
    const [parameters, setParameters] = useState(request.params)
    const [, setState] = useState(false)

    const onChangeHandler = (param) => {
        const index = request.params.findIndex((x) => {
            if (x) {
                return x.name === param.name
            }
        })

        request.params[index] = param
        if (onChange) {
            onChange(request)
        }
    }

    const onDeleteHandler = (param) => {
        const params = request.params.filter((x) => {
            return x.name != param.name
        })

        request.params = params
        if (onChange) {
            onChange(request)
        }
        setParameters(params) // local state
    }
    const onNewClickHandler = () => {
        request.params.push({ name: '', value: '', description: '', selected: false })
        if (onChange) {
            onChange(request)
        }
        setParameters(request.params)
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

                    {parameters &&
                        parameters.map((p, index) => {
                            return (
                                <ParamsRow
                                    key={index}
                                    param={p}
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

function ParamsRow({ param, onChange, onDelete }) {
    const onChangeHandler = (name, newValue) => {
        param[name] = newValue
        if (onChange) {
            onChange(param)
        }
    }

    const onClickHandler = () => {
        onDelete(param)
    }

    return (
        <tr>
            <td className=" pl-2 pr-2 border bg-rabab-border pt-1 pb-1">
                <CheckBoxColumn name="selected" value={param.selected} onChange={onChangeHandler} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="name" value={param.name} onChange={onChangeHandler} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="value" value={param.value} onChange={onChangeHandler} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText
                    name="description"
                    value={param.description}
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
