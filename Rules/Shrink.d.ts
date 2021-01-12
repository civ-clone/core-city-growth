import CityGrowth from '../CityGrowth';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
declare type ShrinkArgs = [CityGrowth];
export declare class Shrink extends Rule<ShrinkArgs, void> {}
export default Shrink;
export interface IShrinkRegistry
  extends IRuleRegistry<Shrink, ShrinkArgs, void> {}
