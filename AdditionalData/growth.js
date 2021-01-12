"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const CityGrowthRegistry_1 = require("../CityGrowthRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const City_1 = require("@civ-clone/core-city/City");
const getAdditionalData = (cityGrowthRegistry = CityGrowthRegistry_1.instance) => [
    new AdditionalData_1.default(City_1.default, 'growth', (city) => cityGrowthRegistry.getByCity(city)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=growth.js.map