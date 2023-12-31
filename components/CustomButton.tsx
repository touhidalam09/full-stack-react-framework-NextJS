'use client'

import React from 'react'

function CustomButton() {
    return (
        <button
            disabled={false}
            type={'button'}
            className={'custom-btn'}
            onClick={() => { }}
        >
            <span className={`flex-1`}>
                title
            </span>
        </button>
    )
}

export default CustomButton