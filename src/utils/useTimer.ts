import React, { useCallback, useMemo, useState } from "react";

interface IUseTimerConfig {
    defaultDuration?: number;
    onComplete: () => void;
}

interface IUseTimerResult {
    start: () => void;
    cancel: () => void;
}

export const useTimer = ({
    defaultDuration = 1000,
    onComplete
}: IUseTimerConfig): IUseTimerResult => {
    const [interval, setInterval] = useState<NodeJS.Timeout | undefined>(undefined);

    const cancelTimer = useCallback(() => {
        clearTimeout(interval);
    }, []);

    const startTimer = useCallback((duration: number = defaultDuration) => {
        if (onComplete) {
            setInterval(setTimeout(onComplete, duration));
            // clearTimeout(interval);
        }
    }, [defaultDuration, onComplete]);

    return useMemo(() => {
        return {
            start: startTimer,
            cancel: cancelTimer
        }
    }, [startTimer]);
}