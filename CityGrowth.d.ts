import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import City from '@civ-clone/core-city/City';
import Yield from '@civ-clone/core-yield/Yield';
import FoodStorage from './Yields/FoodStorage';
export interface ICityGrowth extends IDataObject {
  add(food: Yield): void;
  check(): void;
  city(): City;
  cost(): FoodStorage;
  empty(): void;
  grow(): void;
  progress(): FoodStorage;
  shrink(): void;
  size(): number;
}
export declare class CityGrowth extends DataObject implements ICityGrowth {
  #private;
  constructor(city: City, ruleRegistry?: RuleRegistry);
  add(food: Yield): void;
  check(): void;
  city(): City;
  cost(): FoodStorage;
  setCost(): void;
  empty(): void;
  grow(): void;
  progress(): FoodStorage;
  shrink(): void;
  size(): number;
}
export default CityGrowth;
