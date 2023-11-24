import Button from '@/app/common/Button'
import InputText from '@/app/common/InputText'

export function EndPointUriBar({ request, onChange, onSend, onSave }) {
    const onChangeHandler = (request) => {
        if (onChange) {
            onChange(request)
        }
    }

    return (
        <div className="flex w-full p-1 border border-rabab">
            <div className="border-r">
                <select className="dark:bg-black outline-none">
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="w-full">
                <InputText name="uri" value={request.url} onChange={onChangeHandler} />
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
