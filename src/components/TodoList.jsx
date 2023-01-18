import React from 'react'

export default function TodoList({ data, children }) {
    return (
        <ul>
            {/* {data.map((item) => children(item))} */}
            {data.map(children)}
        </ul>
    )
}
