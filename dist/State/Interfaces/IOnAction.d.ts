import State from '../State';
declare type IOnAction = (state: State, updatedKey: string) => void;
export default IOnAction;
