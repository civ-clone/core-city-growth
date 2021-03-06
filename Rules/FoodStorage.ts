import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

type FoodStorageArgs = [CityGrowth];

export class FoodStorage extends Rule<FoodStorageArgs, void> {}

export default FoodStorage;

export interface IFoodStorageRegistry
  extends IRuleRegistry<FoodStorage, FoodStorageArgs, void> {}
