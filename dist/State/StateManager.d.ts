import IActions from './Interfaces/IActions';
import IOnAction from './Interfaces/IOnAction';
import State from './State';
declare class StateManager {
    static proxyActions(state: State, injectedActions: any, onAction: IOnAction): IActions;
    private static createStateProxy;
    private static getPropertyDescriptorsFromValue;
    private static readPropertyValue;
    private static updatePropertyValue;
}
export default StateManager;
