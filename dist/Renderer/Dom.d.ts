declare class Dom {
    select: HTMLSelectElement;
    root: HTMLDivElement;
    head: HTMLDivElement;
    value: HTMLDivElement;
    body: HTMLDivElement;
    arrow: HTMLDivElement;
    itemsList: HTMLDivElement;
    item: HTMLDivElement[];
    group: HTMLDivElement[];
    option: HTMLDivElement[];
    sumItemsHeight(max?: number): number;
}
export default Dom;
