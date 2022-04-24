declare class Timers {
    pollChangeIntervalId: number;
    pollMutationIntervalId: number;
    searchTimeoutId: number;
    keyingTimeoutId: number;
    clear(): void;
}
export default Timers;
