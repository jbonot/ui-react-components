// system imports
import React, { useCallback } from 'react'
import clsx from 'clsx'

// component imports
import './button.scss'
import { ButtonProps } from './Button.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button: React.FC<ButtonProps> = ({
    backgroundColor = undefined,
    icon = undefined,
    label = undefined,
    onClick = undefined,
    priority = 'tertiary',
    size = 'medium',
}): JSX.Element => {
    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            button: true,
            [`button--${size}`]: true,
            [`button--${priority}`]: true,
        }

        const tailwind = ['flex', 'flex-row', 'cursor-pointer']

        return clsx(classes, tailwind)
    }, [size, priority])
    // ClassNames & Styles - END

    // Render - START
    const renderLabel = useCallback(() => {
        if (!label || label.trim() === '') {
            return null
        }

        return <div className="button--label">{label}</div>
    }, [label])

    const renderIcon = useCallback(() => {
        if (!icon) {
            return null
        }

        return (
            <div className="button--icon">
                <FontAwesomeIcon icon={icon} />
            </div>
        )
    }, [icon])

    return (
        <button
            type="button"
            className={getClasses()}
            style={{ backgroundColor: backgroundColor }}
            onClick={onClick}
        >
            {renderIcon()}
            {renderLabel()}
        </button>
    )
    // Render - END
}
