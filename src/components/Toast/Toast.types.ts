export interface IToastProps {
    /**
     * Callback function invoked when the toast is closed.
     * This function is triggered when the user dismisses the toast or when it closes automatically.
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClose?: () => void
}
