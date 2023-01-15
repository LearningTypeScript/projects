# Typearium

> A [Learning TypeScript > Using IDE Features](https://learning-typescript.com/using-ide-features) 🥗 appetizer project.
> You'll practice using refactors provided by TypeScript in your IDE.

Welcome to the Typearium: a combination aquarium/terrarium/vivarium that keeps animals in the form of TypeScript types.
We're quite niche.

Because we're so niche, we haven't had the budget to invest in updating our (somewhat legacy) code.
It's a good thing we originally wrote it in TypeScript, because we're hoping you can use IDE features powered by TypeScript to help with some refactors!

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script within whichever step you're working on.
For example, to start the TypeScript compiler on the first step in watch mode:

```shell
npm run tsc -- --project 01-favorite-animals --watch
```

In another terminal, run Jest via the `test` script on whichever step you're working on.
For example, to start tests for the first step in watch mode:

```shell
npm run test -- 1 --watch
```

## Steps

- [1. Favorite Animals](./01-favorite-animals)
- [2. Species Collections](./02-species-collections)

## Notes

- Remember, this is meant to exercise your IDE refactoring skills.
- Don't import code from one step into another.
