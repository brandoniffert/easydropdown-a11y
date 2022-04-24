import Timers from '../../Easydropdown/Timers';
import Dom from '../../Renderer/Dom';
import State from '../../State/State';
declare function getScrollTop(currentScrollTop: number, optionOffsetTop: number, optionHeight: number, bodyHeight: number, scrollOffset: number): number;
declare function scrollToView(dom: Dom, timers: Timers, state: State, scrollToMiddle?: boolean): void;
export { getScrollTop, scrollToView as default };
