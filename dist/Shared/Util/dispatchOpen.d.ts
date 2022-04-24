import Config from '../../Config/Config';
import Dom from '../../Renderer/Dom';
import IActions from '../../State/Interfaces/IActions';
import detectBodyCollision from './detectBodyCollision';
import IDispatchOpen from './Interfaces/IDispatchOpen';
declare function dispatchOpen(injectedDetectBodyCollision: typeof detectBodyCollision, actions: IActions, config: Config, dom: Dom): void;
declare const boundDispatchOpen: IDispatchOpen;
export { boundDispatchOpen as default, dispatchOpen };
