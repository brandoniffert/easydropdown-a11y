interface IPropertyDescriptor {
    key: string;
    get: () => any;
    set: (value: any) => void;
}
export default IPropertyDescriptor;
