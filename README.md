# core-city-growth

Methods relating to the changing size of `City`s.

The main `CityGrowth` object stores the current state of `Food` for a `City` and has convenience methods for controlling
when a `City`'s size changes. `CityGrowth`s are retrieved via a `CityGrowthRegistry` instance. A `growth` key of
`AdditionalData` is provided for `City`s automatically.

Includes the following `Rule`s:

- `Cost` for determining how much `Food` growth requires.
- `FoodExhausted` when `FoodStorage` is depleted.
- `FoodLow` triggered when `FoodStorage` is "low".
- `FoodStorage` processed when `CityGrowth.check` is called.
- `Grow` controls what happens when `CityGrowth.grow` is called.
- `Shrink` when `CityGrowth.shrink` is called.
