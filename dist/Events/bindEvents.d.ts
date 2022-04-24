import EventBinding from './EventBinding';
import IEventBinding from './Interfaces/IEventBinding';
import IHandlerParams from './Interfaces/IHandlerParams';
declare function bindEvent(handlerParams: IHandlerParams, eventBindingRaw: IEventBinding): EventBinding;
declare function bindEvents(handlerParams: IHandlerParams): EventBinding[];
export { bindEvents as default, bindEvent };
