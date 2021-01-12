"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _city, _cost, _progress, _ruleRegistry, _size;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityGrowth = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const Grow_1 = require("./Rules/Grow");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Shrink_1 = require("./Rules/Shrink");
const FoodStorage_1 = require("./Yields/FoodStorage");
const FoodStorage_2 = require("./Rules/FoodStorage");
const Cost_1 = require("./Rules/Cost");
class CityGrowth extends DataObject_1.DataObject {
    constructor(city, ruleRegistry = RuleRegistry_1.instance) {
        super();
        _city.set(this, void 0);
        _cost.set(this, new FoodStorage_1.default(Infinity));
        _progress.set(this, new FoodStorage_1.default());
        _ruleRegistry.set(this, void 0);
        _size.set(this, 1);
        __classPrivateFieldSet(this, _city, city);
        __classPrivateFieldSet(this, _ruleRegistry, ruleRegistry);
        this.setCost();
        this.addKey('cost', 'progress', 'size');
    }
    add(food) {
        __classPrivateFieldGet(this, _progress).add(food);
    }
    check() {
        __classPrivateFieldGet(this, _ruleRegistry).process(FoodStorage_2.FoodStorage, this);
    }
    city() {
        return __classPrivateFieldGet(this, _city);
    }
    cost() {
        return __classPrivateFieldGet(this, _cost);
    }
    setCost() {
        const costs = __classPrivateFieldGet(this, _ruleRegistry).process(Cost_1.default, this);
        if (costs.length > 0) {
            __classPrivateFieldGet(this, _cost).set(costs[0], 'setCost');
        }
    }
    empty() {
        __classPrivateFieldGet(this, _progress).subtract(__classPrivateFieldGet(this, _progress).value());
    }
    grow() {
        __classPrivateFieldSet(this, _size, +__classPrivateFieldGet(this, _size) + 1);
        __classPrivateFieldGet(this, _ruleRegistry).process(Grow_1.Grow, this);
    }
    progress() {
        return __classPrivateFieldGet(this, _progress);
    }
    shrink() {
        __classPrivateFieldSet(this, _size, +__classPrivateFieldGet(this, _size) - 1);
        __classPrivateFieldGet(this, _ruleRegistry).process(Shrink_1.Shrink, this);
    }
    size() {
        return __classPrivateFieldGet(this, _size);
    }
}
exports.CityGrowth = CityGrowth;
_city = new WeakMap(), _cost = new WeakMap(), _progress = new WeakMap(), _ruleRegistry = new WeakMap(), _size = new WeakMap();
exports.default = CityGrowth;
//# sourceMappingURL=CityGrowth.js.map