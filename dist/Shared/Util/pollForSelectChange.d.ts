import Config from '../../Config/Config';
import IActions from '../../State/Interfaces/IActions';
import State from '../../State/State';
declare function pollForSelectChange(selectElement: HTMLSelectElement, state: State, actions: IActions, config: Config): number;
export default pollForSelectChange;
