import Option from './Option';
declare class Group {
    label: string;
    options: Option[];
    isDisabled: boolean;
    readonly totalOptions: number;
    readonly hasLabel: boolean;
}
export default Group;
