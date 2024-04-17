import { useCallback, useMemo, useState } from 'react'

export const useStateObject = <T extends { [key: string]: any }>(value: T) => {
    const [item, setItem] = useState<T>(value)

    const setProperty = useCallback((key: string, value: any) => {
        setItem((current) => ({
            ...current,
            [key]: value,
        }))
    }, [])

    const reset = useCallback(() => {
        setItem({} as any as T)
    }, [])

    return useMemo(() => {
        return { value: item, reset, setProperty }
    }, [item, reset, setProperty])
}
