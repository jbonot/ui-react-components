/**
 * Interface defining the props for the Button component.
 */
export interface IButtonProps {
    /**
     * Specifies whether the button is styled as primary.
     *
     * @docType boolean
     * @defaultValue `false`
     */
    primary?: boolean

    /**
     * Background color of the button.
     * Accepts a string value representing a CSS color.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    backgroundColor?: string

    /**
     * Size of the button.
     * Can be one of: 'small', 'medium', 'large'.
     *
     * @docType 'small' | 'medium' | 'large'
     * @defaultValue `'medium'`
     */
    size?: 'small' | 'medium' | 'large'

    /**
     * Label text displayed on the button.
     *
     * @docType string
     */
    label: string

    /**
     * Callback function invoked when the button is clicked.
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClick?: () => void
}
