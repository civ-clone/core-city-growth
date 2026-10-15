import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import City from '@civ-clone/core-city/City';
import FoodStorage from './Yields/FoodStorage';
import Yield from '@civ-clone/core-yield/Yield';
export interface ICityGrowth extends IDataObject {
  add(food: Yield): void;
  check(): void;
  city(): City;
  cost(): FoodStorage;
  empty(): void;
  grow(cause?: unknown): void;
  progress(): FoodStorage;
  shrink(cause?: unknown): void;
  size(): number;
}
export declare class CityGrowth extends DataObject implements ICityGrowth {
  static readonly transient: string[];
  private _city;
  private _cost;
  private _progress;
  private _ruleRegistry;
  private _size;
  constructor(city: City, ruleRegistry?: RuleRegistry);
  add(food: Yield): void;
  check(): void;
  city(): City;
  cost(): FoodStorage;
  setCost(): void;
  empty(): void;
  /**
   * `cause` says why the city grew, for the `Grow` rules that care: what a ruleset passes is up to it (the unit that
   * joined the city, say). Growing from food passes nothing.
   */
  grow(cause?: unknown): void;
  progress(): FoodStorage;
  /**
   * `cause` says why the city shrank, for the `Shrink` rules that care, as `grow`'s does: the unit that was built, the
   * attack that was lost, or the rule type that starved it, say.
   */
  shrink(cause?: unknown): void;
  size(): number;
}
export default CityGrowth;
