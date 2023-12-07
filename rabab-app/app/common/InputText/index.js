import React, { useState, useEffect } from 'react';

const InputText = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        // Update the local state when the prop value changes
        setInputValue(value);

    }, [value]);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        // Propagate the change to the parent component
        onChange(newValue);
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="dark:bg-black w-full h-full outline-none dark:focus:bg-gray-700"
        />
    );
};

export default InputText;

