import CityGrowth from '../CityGrowth';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
declare type GrowArgs = [CityGrowth];
export declare class Grow extends Rule<GrowArgs, void> {}
export default Grow;
export interface IGrowRegistry extends IRuleRegistry<Grow, GrowArgs, void> {}
