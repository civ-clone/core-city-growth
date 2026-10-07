import CityGrowth from '../CityGrowth';
import CityGrowthRegistry from '../CityGrowthRegistry';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { expect } from 'chai';
import setUpCity from '@civ-clone/core-city/tests/lib/setUpCity';

describe('CityGrowthRegistry', (): void => {
  it("should return each city's own growth", async (): Promise<void> => {
    const ruleRegistry = new RuleRegistry(),
      registry = new CityGrowthRegistry(),
      city = await setUpCity('city', ruleRegistry),
      otherCity = await setUpCity('other', ruleRegistry),
      cityGrowth = new CityGrowth(city, ruleRegistry),
      otherCityGrowth = new CityGrowth(otherCity, ruleRegistry);

    registry.register(cityGrowth, otherCityGrowth);

    expect(registry.getByCity(city)).to.equal(cityGrowth);
    expect(registry.getByCity(otherCity)).to.equal(otherCityGrowth);
  });

  it('should throw for a city with no growth, or one whose growth was unregistered', async (): Promise<void> => {
    const ruleRegistry = new RuleRegistry(),
      registry = new CityGrowthRegistry(),
      city = await setUpCity('city', ruleRegistry),
      cityGrowth = new CityGrowth(city, ruleRegistry);

    expect((): CityGrowth => registry.getByCity(city)).to.throw(TypeError);

    registry.register(cityGrowth);
    registry.unregister(cityGrowth);

    expect((): CityGrowth => registry.getByCity(city)).to.throw(TypeError);
  });

  it('should throw for a city with two growths', async (): Promise<void> => {
    const ruleRegistry = new RuleRegistry(),
      registry = new CityGrowthRegistry(),
      city = await setUpCity('city', ruleRegistry);

    registry.register(
      new CityGrowth(city, ruleRegistry),
      new CityGrowth(city, ruleRegistry)
    );

    expect((): CityGrowth => registry.getByCity(city)).to.throw(TypeError);
  });
});
