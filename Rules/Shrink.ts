import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

// The second argument is what caused it, or `null` (see `CityGrowth#shrink`).
export class Shrink extends Rule<[CityGrowth, unknown], void> {}

export default Shrink;
