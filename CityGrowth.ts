import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import City from '@civ-clone/core-city/City';
import Cost from './Rules/Cost';
import FoodStorage from './Yields/FoodStorage';
import FoodStorageRule from './Rules/FoodStorage';
import Grow from './Rules/Grow';
import Shrink from './Rules/Shrink';
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
  static readonly transient = ['_ruleRegistry'];
  private _city: City;
  private _cost: FoodStorage = new FoodStorage(Infinity);
  private _progress: FoodStorage = new FoodStorage();
  private _ruleRegistry: RuleRegistry;
  private _size: number = 1;

  constructor(city: City, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this._city = city;
    this._ruleRegistry = ruleRegistry;
    this.setCost();

    this.addKey('cost', 'progress', 'size');
  }

  add(food: Yield): void {
    this._progress.add(food);
  }

  check(): void {
    this._ruleRegistry.process(FoodStorageRule, this);
  }

  city(): City {
    return this._city;
  }

  cost(): FoodStorage {
    return this._cost;
  }

  setCost(): void {
    const costs = this._ruleRegistry.process(Cost, this);

    if (costs.length > 0) {
      this._cost.set(costs[0], 'setCost');
    }
  }

  empty(): void {
    this._progress.subtract(this._progress.value());
  }

  grow(): void {
    this._size++;

    this._ruleRegistry.process(Grow, this);
  }

  progress(): FoodStorage {
    return this._progress;
  }

  shrink(): void {
    this._size--;

    this._ruleRegistry.process(Shrink, this);
  }

  size(): number {
    return this._size;
  }
}

export default CityGrowth;
