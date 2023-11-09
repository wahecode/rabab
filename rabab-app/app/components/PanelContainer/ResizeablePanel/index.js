"use client"
import React, { useEffect, useState } from 'react'
export default function ResizeablePanel(props) {
    const DEFAULT_MIN_WIDTH = props.minwidth ? props.minwidth : '300px';
    const DEFAULT_MAX_WIDTH = props.maxwidth ? props.maxwidth : '550px';

    const [newWidth, setNewWidth] = useState(DEFAULT_MIN_WIDTH);
    const [dragging, setDragging] = useState(false);

    const handleDragbarMouseDown = (e) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleMouseMove = (e) => {
        if (dragging) {
            e.preventDefault();
            let width = e.clientX + 2;
            if (width < DEFAULT_MIN_WIDTH || width > DEFAULT_MAX_WIDTH) {
                return;
            }
            setNewWidth(width);
        }
    }

    const handleMouseUp = (e) => {
        if (dragging) {
            e.preventDefault();
            setDragging(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [dragging, newWidth]);

    const className = 'flex relative ml-1 shrink-0 ' + props.className;

    return (
        <div className={className} style={{ width: newWidth }}>
            <div className='w-full'>{props.children}</div>
            <div className='absolute flex h-screen cursor-col-resize w-1 -right-1 
                            border-l border-gray-500 hover:border-l-2'
                onMouseDown={handleDragbarMouseDown}>

            </div>
        </div >
    )
}
