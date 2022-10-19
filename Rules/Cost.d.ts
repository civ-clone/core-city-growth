import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';
declare type CostArgs = [CityGrowth];
declare type CostEffectReturn = number;
export declare class Cost extends Rule<CostArgs, CostEffectReturn> {}
export default Cost;
