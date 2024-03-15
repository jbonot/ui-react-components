// sytem imports
import React, { useCallback } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

// component imports
import './toast.scss'

export interface IToastProps {
    /**
     * Callback function invoked when the toast is closed.
     * This function is triggered when the user dismisses the toast or when it closes automatically.
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClose?: () => void
}

export const Toast = ({
    children,
    onClose,
}: React.PropsWithChildren<IToastProps>) => {
    const getClasses = useCallback(() => {
        const classes = {
            toast: true,
        }

        return clsx(classes)
    }, [])

    // Render - START
    const renderHeader = useCallback(() => {
        if (!onClose) {
            return
        }

        return (
            <div className="flex flex-row-reverse">
                <FontAwesomeIcon icon={faClose} onClick={onClose} />
            </div>
        )
    }, [])
    return (
        <div className={getClasses()}>
            {renderHeader()}
            {children}
        </div>
    )
    // Render - END
}
