import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

type GrowArgs = [CityGrowth];

export class Grow extends Rule<GrowArgs, void> {}

export default Grow;
