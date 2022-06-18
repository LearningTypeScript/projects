# Typearium

> A [Learning TypeScript > Using IDE Features](https://learning-typescript.com/using-ide-features) 🥗 appetizer project.

Welcome to the Typearium: a combination acquarium/terrarium/vivarium that keeps animals in the form of TypeScript types.
We're quite niche.

Because we're so niche, we haven't had the budget to invest in updating our (somewhat legacy) code.
It's a good thing we originally wrote it in TypeScript, because we're hoping you can use IDE features powered by TypeScript to help with some refactors!

## Setup

In one terminal, start the TypeScript compiler in watch mode:

```shell
tsc --watch
```

In another terminal, run Jest on whichever step you're working on.
For example, to run tests for the first step in watch mode:

```shell
npm test -- 1 --watch
```

## Steps

- [1. Favorite Animals](./01-favorite-animals)
- [2. Species Trees](./02-species-trees)

## Notes

- Remember, this is meant to exercise your IDE refactoring skills.
- Don't import code from one step into another.
