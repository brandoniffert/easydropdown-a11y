import IBehavior from './Interfaces/IBehavior';
declare class Behavior implements IBehavior {
    showPlaceholderWhenOpen: boolean;
    openOnFocus: boolean;
    closeOnSelect: boolean;
    useNativeUiOnMobile: boolean;
    loop: boolean;
    clampMaxVisibleItems: boolean;
    liveUpdates: boolean;
    maxVisibleItems: number;
    constructor();
}
export default Behavior;
