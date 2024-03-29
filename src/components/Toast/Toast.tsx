// sytem imports
import React, { useCallback } from 'react'
import clsx from 'clsx'
import { faClose } from '@fortawesome/free-solid-svg-icons'

// internal imports
import { Button } from '../Button'

// component imports
import './toast.scss'
import { IToastProps } from './Toast.types'

export const Toast = ({
    children,
    onClose,
}: React.PropsWithChildren<IToastProps>) => {
    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            toast: true,
        }

        return clsx(classes)
    }, [])
    // ClassNames & Styles - END

    // Render - START
    const renderHeader = useCallback(() => {
        if (!onClose) {
            return
        }

        return (
            <div className="flex flex-row-reverse">
                <Button icon={faClose} onClick={onClose} />
            </div>
        )
    }, [onClose])

    return (
        <div className={getClasses()}>
            {renderHeader()}
            {children}
        </div>
    )
    // Render - END
}
