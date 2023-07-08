# Treasure Hunter

> A [Learning TypeScript > Generics](https://learning-typescript.com/generics) 🍲 entree project.

Good evening, professor.
We're with the National Typeological Survey.
We've received word that there is a new system of catacombs and tunnels beneath your city.
We'd like you to explore them.

Please submit a `collectTreasure` function to us that can recursively sift through buried contents.
We will provide you functions to determine what is fake, real, or general scrap.

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

In another terminal, run Jest via the `test` script.
For example, to start tests in watch mode:

```shell
npm run test -- --watch
```

## Specification

Export a `collectTreasure` function.
It should have three type parameters: `Content`, `Fake`, and `Real`.
`Fake` and `Real` should both extend `Content`.

The `collectTreasure` function should have three runtime parameters:

- `buried`: A `Buried` object _(see later)_ of `Content` data
- `isFake`: A type predicate function that takes in a `datum` and returns whether it is `Fake`
- `isReal`: A type predicate function that takes in a `datum` and returns whether it is `Real`

Also create and export a `Buried` type with a single type parameter.
Each `Buried` object can be one of three things:

- An array of the same type of `Buried` objects
- A `NextArea` object, which can be either:
  - A `Catacomb` shape, with properties:
    - `inside`: A `Buried` object of the same type
    - `type`: `"catacomb"`
  - A `TunnelSystem` shape, with properties:
    - `entrances`: An array of `Buried` objects of the same type
    - `type`: `"tunnels"`
- A `Treasure` object with properties:
  - `content`: A `datum` of the same type
  - `type`: `"treasure"`

The `collectTreasure` function should return an object with three properties:

- `fake`: Array of found `Fake` items
- `real`: Array of found `Real` items
- `scrap`: Array of all other items

## Notes

- Don't use `any` or leave any implicit `any`s.
