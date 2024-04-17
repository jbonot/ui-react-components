import { useStateObject } from '../../utils/useStateObject'
import { useStateList } from '../../utils/useStateList'
import { useCallback, useEffect, useRef, useState } from 'react'

interface IListBuilderHeader {
    key: string
    label?: string
}

interface IListBuilderProps<T, S> {
    value?: T[]
    onChange?: (items: T[]) => void
    headers?: IListBuilderHeader[]
}

export const ListBuilder = <T extends { [key: string]: any }, S>({
    headers,
    onChange,
    value,
}: IListBuilderProps<T, S>) => {
    const lazyValue = useStateList(value ?? [])
    const formData = useStateObject<T>({} as any as T)

    const handleOnAddButtonClick = useCallback(() => {
        const item = headers?.reduce((acc, curr) => {
            return {
                ...acc,
                [curr.key]: formData.value[curr.key],
            }
        }, {}) as any as T
        lazyValue.addItem(item)
        formData.reset()
    }, [formData, headers, lazyValue])

    useEffect(() => {
        onChange?.(lazyValue.items)
    }, [lazyValue.items, onChange])

    const renderTableHeader = useCallback(() => {
        return (
            <th>
                {headers?.map((item) => {
                    return <td key={item.key}>{item.label ?? item.key}</td>
                })}
                <td>&nbsp;</td>
            </th>
        )
    }, [headers])

    const renderListItem = useCallback(
        (item: T) => {
            return (
                <tr>
                    {headers?.map((header) => {
                        return <td key={header.key}>{item[header.key]}</td>
                    })}
                    <td>&nbsp;</td>
                </tr>
            )
        },
        [headers]
    )

    const renderTableInput = useCallback(() => {
        return (
            <tr>
                {headers?.map((header) => {
                    return (
                        <td key={header.key}>
                            <input
                                type="text"
                                value={formData.value[header.key] ?? ''}
                                onChange={(ev) => {
                                    formData.setProperty(
                                        header.key,
                                        ev.target.value
                                    )
                                }}
                            />
                        </td>
                    )
                })}
                <td>
                    <button onClick={handleOnAddButtonClick}>add</button>
                </td>
            </tr>
        )
    }, [formData, handleOnAddButtonClick, headers])

    return (
        <table>
            {renderTableHeader()}
            {lazyValue.items.map(renderListItem)}
            {renderTableInput()}
        </table>
    )
}
