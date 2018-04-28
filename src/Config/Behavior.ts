import IBehavior from './Interfaces/IBehavior';

class Behavior implements IBehavior {
    public showPlaceholderOnOpen:  boolean = false;
    public openOnFocus:            boolean = false;
    public closeOnSelect:          boolean = false;
    public useNativeUiOnMobile:    boolean = true;
    public loop:                   boolean = false;
    public clampMaxVisibleOptions: boolean = true;
    public maxVisibleOptions:      number  = 15;
}

export default Behavior;