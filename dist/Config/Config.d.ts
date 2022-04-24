import Behavior from './Behavior';
import Callbacks from './Callbacks';
import ClassNames from './ClassNames';
import IConfig from './Interfaces/IConfig';
declare class Config implements IConfig {
    callbacks: Callbacks;
    classNames: ClassNames;
    behavior: Behavior;
    constructor();
}
export default Config;
