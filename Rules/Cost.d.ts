import CityGrowth from '../CityGrowth';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
declare type CostArgs = [CityGrowth];
declare type CostEffectReturn = number;
export declare class Cost extends Rule<CostArgs, CostEffectReturn> {}
export default Cost;
export interface ICostRegistry
  extends IRuleRegistry<Cost, CostArgs, CostEffectReturn> {}
