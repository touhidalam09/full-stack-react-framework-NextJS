'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({title, containerStyles, btnType, handleClick}: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton