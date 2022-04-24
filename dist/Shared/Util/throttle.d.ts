declare function throttle(handler: (...args: any[]) => void, delay: number): (...args: any[]) => void;
export default throttle;
