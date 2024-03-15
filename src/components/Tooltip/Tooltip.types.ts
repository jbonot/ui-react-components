export interface ITooltipProps {
    /**
     * Tooltip contents
     *
     * @docType string
     */
    label: string

    /**
     * The position of the tooltip relative to its target
     * Can be one of: 'top', 'bottom, 'left', 'right'.
     *
     * @docType 'top' | 'bottom' | 'left' | 'right'
     * @defaultValue `undefined`
     */
    position?: 'top' | 'bottom' | 'left' | 'right'
}
