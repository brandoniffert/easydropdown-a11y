import ClassNames from '../Config/ClassNames';
import State from '../State/State';
import Dom from './Dom';
declare class Renderer {
    classNames: ClassNames;
    dom: Dom;
    constructor(classNames: ClassNames);
    render(state: State, selectElement: HTMLSelectElement): Dom;
    update(state: State, key?: keyof State): void;
    destroy(): void;
    private injectSelect;
    private syncSelectWithValue;
    static queryDomRefs(dom: Dom, keys?: string[]): Dom;
}
export default Renderer;
