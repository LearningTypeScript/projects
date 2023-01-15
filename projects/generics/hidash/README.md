# Hidash

> A [Learning TypeScript > Generics](https://learning-typescript.com/generics) 🥗 appetizer project.
> You'll practice using generics to write data-agnostic utility functions.

_Zap!_
Bang!
Fizz!

Welcome, traveler, to the mystical world of... 2010!
But it's not the 2010 you're thinking of.
You've entered a parallel universe eerily similar to yours but for two key differences:

- [Lodash](https://lodash.es) was never released
- TypeScript was released much earlier, in the early 2000s

Your task is to create several Lodash-like useful array and object functions in TypeScript.
They will need to use generic type arguments for proper typings.

_Welcome to the TypeScript Zone._

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script within whichever step you're working on.
For example, to start the TypeScript compiler on the first step in watch mode:

```shell
npm run tsc -- --project 01-unique --watch
```

In another terminal, run Jest via the `test` script on whichever step you're working on.
For example, to start tests for the first step in watch mode:

```shell
npm run test -- 1 --watch
```

## Steps

- [1. Unique](./01-unique)
- [2. Zip](./02-zip)
- [3. Pick](./03-pick)
- [4. Pick Many](./04-pickmany)

## Notes

- Don't import code from one step into another.
- Each function you write will need to use generic type arguments to be properly typed.
