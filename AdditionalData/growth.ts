import {
  CityGrowthRegistry,
  instance as cityGrowthRegistryInstance,
} from '../CityGrowthRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import City from '@civ-clone/core-city/City';
import CityGrowth from '../CityGrowth';

export const getAdditionalData: (
  cityGrowthRegistry?: CityGrowthRegistry
) => AdditionalData[] = (
  cityGrowthRegistry: CityGrowthRegistry = cityGrowthRegistryInstance
): AdditionalData[] => [
  new AdditionalData(
    City,
    'growth',
    (city: City): CityGrowth => cityGrowthRegistry.getByCity(city)
  ),
];

export default getAdditionalData;
