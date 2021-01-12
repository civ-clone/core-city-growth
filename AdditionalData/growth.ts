import {
  CityGrowthRegistry,
  instance as cityGrowthRegistryInstance,
} from '../CityGrowthRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import City from '@civ-clone/core-city/City';

export const getAdditionalData = (
  cityGrowthRegistry: CityGrowthRegistry = cityGrowthRegistryInstance
) => [
  new AdditionalData(City, 'growth', (city: City) =>
    cityGrowthRegistry.getByCity(city)
  ),
];

export default getAdditionalData;
