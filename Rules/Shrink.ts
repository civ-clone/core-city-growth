import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

type ShrinkArgs = [CityGrowth];

export class Shrink extends Rule<ShrinkArgs, void> {}

export default Shrink;
