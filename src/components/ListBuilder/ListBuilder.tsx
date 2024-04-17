import { useStateList } from '../../utils/useStateList'
import { useCallback, useEffect, useRef } from 'react'

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
    const formValues = useRef<T>({} as any as T)

    const handleOnAddButtonClick = useCallback(() => {
        const item = headers?.reduce((acc, curr) => {
            return {
                ...acc,
                [curr.key]: formValues.current[curr.key],
            }
        }, {}) as any as T
        lazyValue.addItem(item)
        formValues.current = {} as any as T
    }, [headers, lazyValue])

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
                                onChange={(ev) => {
                                    formValues.current = {
                                        ...formValues.current,
                                        [header.key]: ev.target.value,
                                    }
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
    }, [handleOnAddButtonClick, headers])

    return (
        <table>
            {renderTableHeader()}
            {lazyValue.items.map(renderListItem)}
            {renderTableInput()}
        </table>
    )
}
