import DomChangeType from './Constants/DomChangeType';
import IAttributeChange from './Interfaces/IAttributeChange';
declare class PatchCommand {
    type: DomChangeType;
    newNode: Node;
    newInnerHtml: string;
    newTextContent: string;
    attributeChanges: IAttributeChange[];
    childCommands: PatchCommand[];
    index: number;
}
export default PatchCommand;
