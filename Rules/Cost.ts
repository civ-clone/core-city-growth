import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

type CostArgs = [CityGrowth];
type CostEffectReturn = number;

export class Cost extends Rule<CostArgs, CostEffectReturn> {}

export default Cost;
