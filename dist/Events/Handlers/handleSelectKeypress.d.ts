import IHandlerParams from '../Interfaces/IHandlerParams';
declare function handleSelectKeypress({ keyCode }: KeyboardEvent, { actions, timers, state }: IHandlerParams, searchResetDuration?: number): void;
export default handleSelectKeypress;
