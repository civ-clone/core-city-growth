import City from '@civ-clone/core-city/City';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';

export class FoodLow extends Rule<[City], void> {}

export default FoodLow;

export interface IFoodLowRegistry
  extends IRuleRegistry<FoodLow, [City], void> {}
