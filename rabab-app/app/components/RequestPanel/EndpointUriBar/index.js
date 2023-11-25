import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'

export function EndPointUriBar({ request, onChange, onSend, onSave }) {

    const onChangeHandler = (name, newValue) => {
        if (name == 'method') {
            request.method = newValue;
        } else {
            request.uri = newValue;
        }

        if (onChange) {
            onChange(request)
        }
    }


    return (
        <div className="flex w-full p-1 border border-rabab">
            <div className="border-r">
                <select className="dark:bg-black outline-none" onChange={e => onChangeHandler('method', e.target.value)}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="w-full">
                <InputText name="uri" value={request.uri} onChange={onChangeHandler} />
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
