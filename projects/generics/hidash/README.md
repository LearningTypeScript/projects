# Hidash

> A [Learning TypeScript > Generics](https://learning-typescript.com/generics) 🥗 appetizer project.

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

- [1. Unique](./01-unique)
- [2. Zip](./02-zip)
- [3. Pick](./03-pick)
- [4. Pick Many](./04-pickMany)

## Notes

- Don't import code from one step into another.
- Each function you write will need to use generic type arguments to be properly typed.
