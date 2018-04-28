import Config         from '../../Config/Config';
import Dom            from '../../Renderer/Dom';
import CollisionType  from '../../State/Constants/CollisionType';
import State          from '../../State/State';
import ICollisionData from '../Interfaces/ICollisionData';

function detectBodyCollision(state: State, dom: Dom, config: Config): ICollisionData {
    const bbHead = dom.head.getBoundingClientRect();
    const wh = window.innerHeight;
    const deltaTop = bbHead.top;
    const deltaBottom = wh - bbHead.bottom;

    if (!dom.firstOption) return {
        type: CollisionType.NONE,
        maxVisibleOptionsOverride: -1
    };

    const visibleOptions = Math.min(config.behavior.maxVisibleOptions, state.totalOptions);
    const maxHeight = visibleOptions * dom.optionHeight;

    let type = CollisionType.NONE;
    let maxVisibleOptionsOverride = -1;

    if (deltaTop <= maxHeight && deltaBottom <= maxHeight) {
        const largestDelta = Math.max(deltaBottom, deltaTop);

        type = deltaTop < deltaBottom ? CollisionType.TOP : CollisionType.BOTTOM,
        maxVisibleOptionsOverride = Math.floor(largestDelta / dom.optionHeight);
    } else if (deltaTop <= maxHeight) {
        type = CollisionType.TOP;
    } else if (deltaBottom <= maxHeight) {
        type = CollisionType.BOTTOM;
    }

    return {type, maxVisibleOptionsOverride};
}

export default detectBodyCollision;