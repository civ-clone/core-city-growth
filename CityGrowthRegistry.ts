import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import City from '@civ-clone/core-city/City';
import CityGrowth from './CityGrowth';

export interface ICityGrowthRegistry extends IEntityRegistry<CityGrowth> {
  getByCity(city: City): CityGrowth;
}

export class CityGrowthRegistry
  extends EntityRegistry<CityGrowth>
  implements ICityGrowthRegistry
{
  constructor() {
    super(CityGrowth);
  }

  getByCity(city: City): CityGrowth {
    const cityGrowths = this.getBy('city', city);

    if (cityGrowths.length !== 1) {
      throw new TypeError('Wrong number of CityGrowths returned.');
    }

    return cityGrowths[0];
  }
}

export const instance: CityGrowthRegistry = new CityGrowthRegistry();

export default CityGrowthRegistry;
