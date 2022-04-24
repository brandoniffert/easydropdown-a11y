import IConfig from '../Config/Interfaces/IConfig';
import IActions from '../State/Interfaces/IActions';
declare class Easydropdown {
    actions: IActions;
    private config;
    private state;
    private dom;
    private eventBindings;
    private renderer;
    private timers;
    constructor(selectElement: HTMLSelectElement, options: IConfig);
    readonly selectElement: HTMLSelectElement;
    value: string;
    open(): void;
    close(): void;
    refresh(): void;
    validate(): boolean;
    destroy(): void;
    private handleStateUpdate;
}
export default Easydropdown;
