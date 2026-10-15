"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityGrowth = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Cost_1 = require("./Rules/Cost");
const FoodStorage_1 = require("./Yields/FoodStorage");
const FoodStorage_2 = require("./Rules/FoodStorage");
const Grow_1 = require("./Rules/Grow");
const Shrink_1 = require("./Rules/Shrink");
class CityGrowth extends DataObject_1.DataObject {
    constructor(city, ruleRegistry = RuleRegistry_1.instance) {
        super();
        this._cost = new FoodStorage_1.default(Infinity);
        this._progress = new FoodStorage_1.default();
        this._size = 1;
        this._city = city;
        this._ruleRegistry = ruleRegistry;
        this.setCost();
        this.addKey('cost', 'progress', 'size');
    }
    add(food) {
        this._progress.add(food);
    }
    check() {
        this._ruleRegistry.process(FoodStorage_2.default, this);
    }
    city() {
        return this._city;
    }
    cost() {
        return this._cost;
    }
    setCost() {
        const costs = this._ruleRegistry.process(Cost_1.default, this);
        if (costs.length > 0) {
            this._cost.set(costs[0], 'setCost');
        }
    }
    empty() {
        this._progress.subtract(this._progress.value());
    }
    /**
     * `cause` says why the city grew, for the `Grow` rules that care: what a ruleset passes is up to it (the unit that
     * joined the city, say). Growing from food passes nothing.
     */
    grow(cause = null) {
        this._size++;
        this._ruleRegistry.process(Grow_1.default, this, cause);
    }
    progress() {
        return this._progress;
    }
    /**
     * `cause` says why the city shrank, for the `Shrink` rules that care, as `grow`'s does: the unit that was built, the
     * attack that was lost, or the rule type that starved it, say.
     */
    shrink(cause = null) {
        this._size--;
        this._ruleRegistry.process(Shrink_1.default, this, cause);
    }
    size() {
        return this._size;
    }
}
exports.CityGrowth = CityGrowth;
CityGrowth.transient = ['_ruleRegistry'];
exports.default = CityGrowth;
//# sourceMappingURL=CityGrowth.js.map