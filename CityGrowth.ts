import { Cost, ICostRegistry } from './Rules/Cost';
import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  FoodStorage as FoodStorageRule,
  IFoodStorageRegistry,
} from './Rules/FoodStorage';
import { Grow, IGrowRegistry } from './Rules/Grow';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import { Shrink, IShrinkRegistry } from './Rules/Shrink';
import City from '@civ-clone/core-city/City';
import FoodStorage from './Yields/FoodStorage';
import Yield from '@civ-clone/core-yield/Yield';

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

export class CityGrowth extends DataObject implements ICityGrowth {
  #city: City;
  #cost: FoodStorage = new FoodStorage(Infinity);
  #progress: FoodStorage = new FoodStorage();
  #ruleRegistry: RuleRegistry;
  #size: number = 1;

  constructor(city: City, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this.#city = city;
    this.#ruleRegistry = ruleRegistry;
    this.setCost();

    this.addKey('cost', 'progress', 'size');
  }

  add(food: Yield): void {
    this.#progress.add(food);
  }

  check(): void {
    (this.#ruleRegistry as IFoodStorageRegistry).process(FoodStorageRule, this);
  }

  city(): City {
    return this.#city;
  }

  cost(): FoodStorage {
    return this.#cost;
  }

  setCost(): void {
    const costs = (this.#ruleRegistry as ICostRegistry).process(Cost, this);

    if (costs.length > 0) {
      this.#cost.set(costs[0], 'setCost');
    }
  }

  empty(): void {
    this.#progress.subtract(this.#progress.value());
  }

  grow(): void {
    this.#size++;

    (this.#ruleRegistry as IGrowRegistry).process(Grow, this);
  }

  progress(): FoodStorage {
    return this.#progress;
  }

  shrink(): void {
    this.#size--;

    (this.#ruleRegistry as IShrinkRegistry).process(Shrink, this);
  }

  size(): number {
    return this.#size;
  }
}

export default CityGrowth;
