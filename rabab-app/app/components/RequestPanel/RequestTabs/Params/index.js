import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'
import React, { useEffect, useState } from 'react'

export default function Params({ params, onChange }) {
    const [inputParams, setInputParams] = useState(params)
    const [, setState] = useState(false)

    useEffect(() => {
        setInputParams(params)

    }, [params]);

    const onChangeHandler = (param) => {
        const index = inputParams.findIndex((x) => {
            if (x) {
                return x.id === param.id
            }
        })
        const localParams = [...inputParams];
        localParams[index] = param;

        setInputParams(localParams);
        if (onChange) {
            onChange(localParams)
        }
    }

    const onDeleteHandler = (param) => {
        const localParams = inputParams.filter((x) => {
            return x.id === param.id
        })

        setInputParams(localParams);
        if (onChange) {
            onChange(localParams)
        }
    }
    const onNewClickHandler = () => {

        const localParams = [...inputParams];
        localParams.push({ id: Math.random(), name: '', value: '', description: '', selected: false })
        setInputParams(localParams)
        setState((perv) => !perv)
        if (onChange) {
            onChange(localParams)
        }
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
                    {inputParams &&
                        inputParams.map((p, index) => {
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
    const [inputParam, setInputParam] = useState(param);
    useEffect(() => {
        setInputParam(param)
    }, [param]);

    const onChangeHandler = (name, newValue) => {
        const localParam = { ...inputParam }
        localParam[name] = newValue

        if (onChange) {
            onChange(localParam)
        }
    }

    const onClickHandler = () => {
        const localParam = { ...inputParam }
        onDelete(localParam)
    }

    return (
        <tr>
            <td className=" pl-2 pr-2 border bg-rabab-border pt-1 pb-1">
                <CheckBoxColumn name="selected" value={inputParam.selected} onChange={value => onChangeHandler('selected', value)} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="name" value={inputParam.name} onChange={value => onChangeHandler('name', value)} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText name="value" value={inputParam.value} onChange={value => onChangeHandler('value', value)} />
            </td>
            <td className="border border-t-0 border-l-0 bg-rabab-border p-1">
                <InputText
                    name="description"
                    value={inputParam.description}
                    onChange={value => onChangeHandler('description', value)}
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
