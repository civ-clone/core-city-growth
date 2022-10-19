"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityGrowth_city, _CityGrowth_cost, _CityGrowth_progress, _CityGrowth_ruleRegistry, _CityGrowth_size;
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
        _CityGrowth_city.set(this, void 0);
        _CityGrowth_cost.set(this, new FoodStorage_1.default(Infinity));
        _CityGrowth_progress.set(this, new FoodStorage_1.default());
        _CityGrowth_ruleRegistry.set(this, void 0);
        _CityGrowth_size.set(this, 1);
        __classPrivateFieldSet(this, _CityGrowth_city, city, "f");
        __classPrivateFieldSet(this, _CityGrowth_ruleRegistry, ruleRegistry, "f");
        this.setCost();
        this.addKey('cost', 'progress', 'size');
    }
    add(food) {
        __classPrivateFieldGet(this, _CityGrowth_progress, "f").add(food);
    }
    check() {
        __classPrivateFieldGet(this, _CityGrowth_ruleRegistry, "f").process(FoodStorage_2.default, this);
    }
    city() {
        return __classPrivateFieldGet(this, _CityGrowth_city, "f");
    }
    cost() {
        return __classPrivateFieldGet(this, _CityGrowth_cost, "f");
    }
    setCost() {
        const costs = __classPrivateFieldGet(this, _CityGrowth_ruleRegistry, "f").process(Cost_1.default, this);
        if (costs.length > 0) {
            __classPrivateFieldGet(this, _CityGrowth_cost, "f").set(costs[0], 'setCost');
        }
    }
    empty() {
        __classPrivateFieldGet(this, _CityGrowth_progress, "f").subtract(__classPrivateFieldGet(this, _CityGrowth_progress, "f").value());
    }
    grow() {
        var _a;
        __classPrivateFieldSet(this, _CityGrowth_size, (_a = __classPrivateFieldGet(this, _CityGrowth_size, "f"), _a++, _a), "f");
        __classPrivateFieldGet(this, _CityGrowth_ruleRegistry, "f").process(Grow_1.default, this);
    }
    progress() {
        return __classPrivateFieldGet(this, _CityGrowth_progress, "f");
    }
    shrink() {
        var _a;
        __classPrivateFieldSet(this, _CityGrowth_size, (_a = __classPrivateFieldGet(this, _CityGrowth_size, "f"), _a--, _a), "f");
        __classPrivateFieldGet(this, _CityGrowth_ruleRegistry, "f").process(Shrink_1.default, this);
    }
    size() {
        return __classPrivateFieldGet(this, _CityGrowth_size, "f");
    }
}
exports.CityGrowth = CityGrowth;
_CityGrowth_city = new WeakMap(), _CityGrowth_cost = new WeakMap(), _CityGrowth_progress = new WeakMap(), _CityGrowth_ruleRegistry = new WeakMap(), _CityGrowth_size = new WeakMap();
exports.default = CityGrowth;
//# sourceMappingURL=CityGrowth.js.map