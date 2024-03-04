import React, { useCallback, useMemo } from "react";

interface IUseTimerConfig {
    defaultDuration?: number;
    onComplete: () => void;
}

export const useTimer = ({
    defaultDuration = 1000,
    onComplete
}: IUseTimerConfig) => {

    const startTimer = useCallback((duration: number = defaultDuration) => {
        if (onComplete) {
            const interval = setTimeout(onComplete, duration);
            clearTimeout(interval);
        }
    }, [defaultDuration, onComplete]);

    return useMemo(() => {
        start: startTimer
    }, [startTimer]);
}