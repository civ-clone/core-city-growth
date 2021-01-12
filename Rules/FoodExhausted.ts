import City from '@civ-clone/core-city/City';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';

export class FoodExhausted extends Rule<[City], void> {}

export default FoodExhausted;

export interface IFoodExhaustedRegistry
  extends IRuleRegistry<FoodExhausted, [City], void> {}
