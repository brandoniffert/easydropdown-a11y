import ICallback from './Interfaces/ICallback';
import ISelectCallback from './Interfaces/ISelectCallback';
declare class Callbacks {
    onOpen: ICallback;
    onClose: ICallback;
    onSelect: ISelectCallback;
    onOptionClick: ISelectCallback;
    constructor();
}
export default Callbacks;
