import React, { useEffect, useState, useRef } from 'react'

export default function DottedMenu({ items, onClickHandler }) {
    const [isVisible, setVisible] = useState(true);

    let menuRef = useRef();

    const className = isVisible ? '' : 'hidden';


    useEffect(() => {

        document.addEventListener('mousedown', (e) => {
            if (!menuRef.current.contains(e.target)) {
                setVisible(false);
            }
        });
    });


    return (
        <div>
            <div className='text-lg' onClick={e => { setVisible(true) }}> ...</div>
            <div className={className} ref={menuRef}>
                <ul className='w-56 absolute text-left  border border-gray-500 bg-slate-50 dark:bg-gray-900'>
                    {items.map(item => {
                        return (
                            <li className='text-xs hover:bg-blue-200 hover:dark:text-black py-1 pl-4'
                                onClick={e => {
                                    setVisible(false);
                                    onClickHandler(item);
                                }}>
                                {item.label}
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
