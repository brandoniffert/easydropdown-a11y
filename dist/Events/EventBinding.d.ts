import IEventBinding from './Interfaces/IEventBinding';
import IEventHandler from './Interfaces/IEventHandler';
declare class EventBinding implements IEventBinding {
    type: string;
    target: HTMLElement;
    debounce: number;
    throttle: number;
    handler: IEventHandler;
    boundHandler: EventListener;
    passive: boolean;
    constructor(eventBindingRaw: IEventBinding | string);
    unbind(): void;
}
export default EventBinding;
