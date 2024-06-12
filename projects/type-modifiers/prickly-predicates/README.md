# Prickly Predicates

> A [Learning TypeScript > Type Modifiers](https://learning-typescript.com/type-modifiers) 🥗 appetizer project.

Howdy ho, farmer friend!

Here at 🌵 Cultured Cacti 🌵, we cultivate the _crème de la crème_ of cactus, cassava, and chia.
Any plant that reminds you of savannahs, South America, and the American Southwest are our claim to fame.
Yee-haw!

We reckon our industry could be much improved by some spring cleaning of our code.
We'd like to prepare a trio of TypeScript type predicates to wrangle our unruly data types.
Are you up for the challenge, partner?

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script within whichever step you're working on.
For example, to start the TypeScript compiler on the first step in watch mode:

```shell
npm run tsc -- --project 01-pruning-pests --watch
```

In another terminal, run Jest via the `test` script on whichever step you're working on.
For example, to start tests for the first step in watch mode:

```shell
npm run test -- 1 --watch
```

## Steps

- [1. Pruning Pests](./01-pruning-pests)
- [2. Plant Particulars](./02-plant-particulars)
- [3. Picking Pears](./03-picking-pears)

## Notes

- Don't import code from one step into another.
- For each type predicate function, explicitly write the return type with `is`
  - Don't rely on [TypeScript 5.5's inferred type predicates](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#inferred-type-predicates)
