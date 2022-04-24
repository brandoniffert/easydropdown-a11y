import Config from '../../Config/Config';
import Dom from '../../Renderer/Dom';
import ICollisionData from './Interfaces/ICollisionData';
declare function mapCollisionData(deltaTop: any, deltaBottom: any, maxHeight: any, itemHeight: any): ICollisionData;
declare function detectBodyCollision(dom: Dom, config: Config): ICollisionData;
export { detectBodyCollision as default, mapCollisionData };
