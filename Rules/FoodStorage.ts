import CityGrowth from '../CityGrowth';
import Rule from '@civ-clone/core-rule/Rule';

type FoodStorageArgs = [CityGrowth];

export class FoodStorage extends Rule<FoodStorageArgs, void> {}

export default FoodStorage;
