// system imports
import React, { useCallback, useState } from 'react'
import clsx from 'clsx'

// internal imports
import { useTimer } from '../../utils/useTimer'

// component imports
import './tooltip.scss'
import { ITooltipProps } from './Tooltip.types'

export const Tooltip = ({
    children,
    label,
    position = 'top',
}: React.PropsWithChildren<ITooltipProps>) => {
    const [isVisible, setIsVisible] = useState(false)

    const timer = useTimer({
        defaultDuration: 500,
        onComplete: () => setIsVisible(true),
    })

    const handleMouseEnter = useCallback(() => {
        timer.start()
    }, [timer])

    const handleMouseLeave = useCallback(() => {
        timer.cancel()
        setIsVisible(false)
    }, [timer])

    const getClasses = useCallback(() => {
        const classes = {
            tooltip: true,
            'tooltip--top': position === 'top',
            'tooltip--bottom': position === 'bottom',
            'tooltip--left': position === 'left',
            'tooltip--right': position === 'right',
            'tooltip--visible': isVisible,
        }

        return clsx(classes)
    }, [position, isVisible])

    return (
        <div className={getClasses()}>
            <div
                className="tooltip--target"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <div className="tooltip--content">{label}</div>
        </div>
    )
}
