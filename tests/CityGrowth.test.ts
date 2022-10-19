import CityGrowth from '../CityGrowth';
import Cost from '../Rules/Cost';
import Effect from '@civ-clone/core-rule/Effect';
import FoodStorage from '../Yields/FoodStorage';
import FoodStorageRule from '../Rules/FoodStorage';
import Grow from '../Rules/Grow';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Shrink from '../Rules/Shrink';
import setUpCity from '@civ-clone/core-city/tests/lib/setUpCity';
import * as chai from 'chai';
import * as spies from 'chai-spies';

const { expect, use } = chai;

use(spies);

describe('CityGrowth', (): void => {
  it('should have expected default values', async (): Promise<void> => {
    const city = await setUpCity(),
      cityGrowth = new CityGrowth(city);

    expect(cityGrowth.cost().value()).to.equal(Infinity);
    expect(cityGrowth.progress().value()).to.equal(0);
    expect(cityGrowth.size()).to.equal(1);
    expect(cityGrowth.city()).to.equal(city);
  });

  it('should correctly use `Rule`s and support `add`ing `Yield`s.', async (): Promise<void> => {
    const ruleRegistry = new RuleRegistry(),
      costSpy = chai.spy((): number => 10),
      foodStorageSpy = chai.spy((): void => {}),
      growSpy = chai.spy((): void => {}),
      shrinkSpy = chai.spy((): void => {});

    ruleRegistry.register(
      new Cost(new Effect(costSpy)),
      new FoodStorageRule(new Effect(foodStorageSpy)),
      new Grow(new Effect(growSpy)),
      new Shrink(new Effect(shrinkSpy))
    );

    const cityGrowth = new CityGrowth(await setUpCity(), ruleRegistry);

    expect(cityGrowth.cost().value()).to.equal(10);
    expect(costSpy).to.called.once;

    cityGrowth.add(new FoodStorage(5));

    expect(cityGrowth.progress().value()).to.equal(5);

    cityGrowth.add(new FoodStorage(5));

    expect(cityGrowth.progress().value()).to.equal(10);

    cityGrowth.check();

    expect(foodStorageSpy).to.called.once;

    cityGrowth.empty();

    expect(cityGrowth.progress().value()).to.equal(0);

    cityGrowth.grow();

    expect(cityGrowth.size()).to.equal(2);
    expect(growSpy).to.called.once;

    cityGrowth.shrink();

    expect(cityGrowth.size()).to.equal(1);
    expect(shrinkSpy).to.called.once;
  });
});
