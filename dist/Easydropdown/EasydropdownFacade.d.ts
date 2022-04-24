import Easydropdown from './Easydropdown';
declare class EasydropdownFacade {
    /**
     * Programmatically opens the dropdown, closing any
     * other open instances.
     */
    open: () => void;
    /**
     * Programmatically closes the dropdown.
     */
    close: () => void;
    /**
     * Refreshes the instance and updates the DOM in
     * response to a change in the underlying `<select>`
     * element (for example, adding or removing an option).
     */
    refresh: () => void;
    /**
     * Validates the instance by checking
     * the current state whether dropown is required
     * and a selection was made
     *
     * @returns boolean whether the dropdown is valid
     */
    validate: () => boolean;
    /**
     * Destroys the instance by removing all EasyDropDown-generated
     * elements from the DOM, and unbinding all event handlers.
     * The underlying select is returned to the root position.
     */
    destroy: () => void;
    /**
     * An accessor property allowing writing to and reading
     * from the dropdown's value.
     */
    value: string;
    constructor(implementation: Easydropdown);
}
export default EasydropdownFacade;
