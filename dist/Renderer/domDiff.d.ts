import PatchCommand from './PatchCommand';
declare function domDiff(prev: Node, next: Node): PatchCommand;
export default domDiff;
