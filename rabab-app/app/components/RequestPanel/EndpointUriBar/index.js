import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'
import { useState } from 'react';

export function EndPointUriBar({ request, onChange, onSend, onSave }) {
    const [method, setMethod] = useState(request.method);
    const [uri, setUri] = useState(request.uri);

    const onChangeHandler = (name, newValue) => {
        if (name == 'method') {
            request.method = newValue
            setMethod(newValue);
        } else {

            request.uri = newValue
            setUri(newValue);
        }

        if (onChange) {
            onChange(request)
        }
    }



    return (
        <div className="flex w-full p-1 border border-rabab">
            <div className="border-r">
                <select
                    className="dark:bg-black outline-none"
                    onChange={(e) => onChangeHandler('method', e.target.value)}
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="w-full">
                <InputText name="uri" value={uri}
                    onChange={(name, value) => {
                        onChangeHandler(name, value)
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
