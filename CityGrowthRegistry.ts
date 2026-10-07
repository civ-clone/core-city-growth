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
  // A city's growth is made for it and never moves to another, so the index can't go stale and needs no `reindex`
  //  (civ-clone/web-renderer#308).
  private _byCity = this.index(
    (cityGrowth: CityGrowth): City => cityGrowth.city()
  );

  constructor() {
    super(CityGrowth);
  }

  getByCity(city: City): CityGrowth {
    const cityGrowths = this._byCity.get(city);

    if (cityGrowths.length !== 1) {
      throw new TypeError('Wrong number of CityGrowths returned.');
    }

    return cityGrowths[0];
  }
}

export const instance: CityGrowthRegistry = new CityGrowthRegistry();

export default CityGrowthRegistry;
