// system imports
import { useCallback, useEffect } from 'react'

// internal imports
import { useStateObject } from '../../utils/useStateObject'
import { useStateList } from '../../utils/useStateList'

interface IListBuilderHeader {
    key: string
    label?: string
    type?: 'text' | 'number'
}

interface IListBuilderProps<T> {
    value?: T[]
    onChange?: (items: T[]) => void
    headers?: IListBuilderHeader[]
}

/**
 * Creates and modifies an object list
 */
export const ListBuilder = <T extends { [key: string]: any }>({
    headers,
    onChange,
    value,
}: IListBuilderProps<T>) => {
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
        (item: T, index: number) => {
            return (
                <tr>
                    {headers?.map((header) => {
                        return <td key={header.key}>{item[header.key]}</td>
                    })}
                    <td>
                        <button
                            onClick={() => lazyValue.deleteItemByIndex(index)}
                        >
                            delete
                        </button>
                    </td>
                </tr>
            )
        },
        [headers, lazyValue]
    )

    const renderTableInput = useCallback(() => {
        return (
            <tr>
                {headers?.map((header) => {
                    return (
                        <td key={header.key}>
                            <input
                                type={header.type ?? 'text'}
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
