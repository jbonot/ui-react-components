import { useCallback, useMemo, useRef } from 'react'

interface IUseTimerConfig {
    defaultDuration?: number
    onComplete: () => void
}

interface IUseTimerResult {
    start: () => void
    cancel: () => void
}

export const useTimer = ({
    defaultDuration = 1000,
    onComplete,
}: IUseTimerConfig): IUseTimerResult => {
    const interval = useRef<NodeJS.Timeout | undefined>(undefined)

    const cancelTimer = useCallback(() => {
        clearTimeout(interval.current)
    }, [])

    const startTimer = useCallback(
        (duration: number = defaultDuration) => {
            if (onComplete) {
                clearTimeout(interval.current)
                interval.current = setTimeout(onComplete, duration)
            }
        },
        [defaultDuration, onComplete]
    )

    return useMemo(() => {
        return {
            start: startTimer,
            cancel: cancelTimer,
        }
    }, [cancelTimer, startTimer])
}
