import React from 'react'

export default function Button({ title, onClick }) {

    const props = {}
    if (onClick) {
        props.onClick = onClick
    }
    return (
        <button {...props} className={title !== 'Add Some Todo' ? 'button-remove' : 'button-input'}>{title}</button>
    )
}