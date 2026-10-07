"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.CityGrowthRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const CityGrowth_1 = require("./CityGrowth");
class CityGrowthRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(CityGrowth_1.default);
        // A city's growth is made for it and never moves to another, so the index can't go stale and needs no `reindex`
        //  (civ-clone/web-renderer#308).
        this._byCity = this.index((cityGrowth) => cityGrowth.city());
    }
    getByCity(city) {
        const cityGrowths = this._byCity.get(city);
        if (cityGrowths.length !== 1) {
            throw new TypeError('Wrong number of CityGrowths returned.');
        }
        return cityGrowths[0];
    }
}
exports.CityGrowthRegistry = CityGrowthRegistry;
exports.instance = new CityGrowthRegistry();
exports.default = CityGrowthRegistry;
//# sourceMappingURL=CityGrowthRegistry.js.map