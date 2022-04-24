import Config from '../Config/Config';
import State from './State';
declare class StateMapper {
    static mapFromSelect(selectElement: HTMLSelectElement, config: Config): State;
    private static mapGroup;
    private static mapOption;
}
export default StateMapper;
