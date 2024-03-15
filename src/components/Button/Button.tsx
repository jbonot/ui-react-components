// system imports
import React, { useCallback } from 'react'
import clsx from 'clsx'

// component imports
import './button.scss'
import { IButtonProps } from './Button.types'

export const Button = ({
    priority = 'tertiary',
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: IButtonProps): JSX.Element => {
    const getClasses = useCallback(() => {
        const classes = {
            button: true,
            [`button--${size}`]: true,
            [`button--${priority}`]: true,
        }

        return clsx(classes)
    }, [])

    // Render - START
    return (
        <button
            type="button"
            className={getClasses()}
            style={{ backgroundColor: backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
    // Render - END
}
