import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

// The second argument is what caused it, or `null` (see `CityGrowth#grow`).
export class Grow extends Rule<[CityGrowth, unknown], void> {}

export default Grow;
