import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'
import { useEffect, useState } from 'react';

export function EndPointUriBar({ method, uri, onChange, onSend, onSave }) {
    const [inputMethod, setInputMethod] = useState(method);
    const [inputUri, setInputUri] = useState(uri);

    useEffect(() => {
        // Update the local state when the prop value changes
        setInputMethod(method);
        setInputUri(uri)
    }, [method, uri]);

    const onChangeHandler = (name, newValue) => {
        const val = {
            uri: inputUri,
            method: inputMethod
        }
        if (name == 'method') {
            val.method = newValue
            setInputMethod(newValue);
        } else {
            val.uri = newValue
            setInputUri(newValue)
        }

        if (onChange) {
            onChange(val)
        }
    }



    return (
        <div className="flex w-full p-1 border border-rabab">
            <div className="border-r">
                <select
                    className="dark:bg-black outline-none"
                    onChange={(e) => onChangeHandler('method', e.target.value)}
                    value={inputMethod}
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="w-full">
                <InputText value={inputUri}
                    onChange={(value) => {
                        onChangeHandler('uri', value)
                    }} />
            </div>
            <div className="pr-1">
                <Button onClick={onSend}>Send</Button>
            </div>
            <div>
                <Button onClick={onSave}>Save</Button>
            </div>
        </div>
    )
}
