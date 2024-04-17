import { useCallback, useMemo, useState } from 'react'

export const useStateList = <T>(value: T[]) => {
    const [items, setItems] = useState<T[]>(value)

    const addItem = useCallback((item: T) => {
        setItems((currentItems) => [...currentItems, item])
    }, [])

    const deleteItemByIndex = useCallback((index: number) => {
        setItems((currentItems) => {
            currentItems.splice(index, 1)
            return [...currentItems]
        })
    }, [])

    const updateItem = useCallback((index: number, item: T) => {
        setItems((currentItems) => {
            currentItems[index] = item
            return [...currentItems]
        })
    }, [])

    return useMemo(() => {
        return { items, addItem, deleteItemByIndex, updateItem }
    }, [addItem, deleteItemByIndex, items, updateItem])
}
