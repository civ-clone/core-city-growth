import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import City from '@civ-clone/core-city/City';
import CityGrowth from './CityGrowth';
export interface ICityGrowthRegistry extends IEntityRegistry<CityGrowth> {
  getByCity(city: City): CityGrowth;
}
export declare class CityGrowthRegistry
  extends EntityRegistry<CityGrowth>
  implements ICityGrowthRegistry {
  constructor();
  getByCity(city: City): CityGrowth;
}
export declare const instance: CityGrowthRegistry;
export default CityGrowthRegistry;
