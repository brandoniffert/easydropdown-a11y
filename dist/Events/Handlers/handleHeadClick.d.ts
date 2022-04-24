import IHandlerParams from '../Interfaces/IHandlerParams';
declare function handleHeadClick(injectedGetIsMobilePlatform: (ua: string) => boolean, e: MouseEvent, { state, actions, dom, config }: IHandlerParams): void;
declare const boundHandleHeadClick: any;
export { boundHandleHeadClick as default, handleHeadClick };
