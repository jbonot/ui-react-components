// sytem imports
import React, { useCallback } from 'react'
import clsx from 'clsx'

// component imports
import './toast.scss'

export interface IToastProps {}

export const Toast = ({ children }: React.PropsWithChildren<IToastProps>) => {
    const getClasses = useCallback(() => {
        const classes = {
            toast: true,
        }

        return clsx(classes)
    }, [])

    // Render - START
    return <div className={getClasses()}>{/** TO-DO */}</div>
    // Render - END
}
