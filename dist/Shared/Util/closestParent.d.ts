/**
 * Returns the closest parent of a given element matching the
 * provided selector, optionally including the element itself.
 */
declare function closestParent(el: HTMLElement, selector: string, includeSelf?: boolean): HTMLElement;
export default closestParent;
