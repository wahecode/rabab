import React from 'react'

export default function Body() {
    return (
        <div className="border-rabab p-1 ">
            <textarea
                className="dark:bg-black w-full h-full outline-none"
                id="w3review"
                name="w3review"
                rows="15"
                cols="50"
            >
                At w3schools.com you will learn how to make a website. They offer free tutorials in
                all web development technologies.
            </textarea>
        </div>
    )
}
