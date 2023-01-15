# Analyzing DNA

> A [Learning TypeScript > Arrays](https://learning-typescript.com/arrays) 🥗 appetizer project.
> You'll practice writing single- and multi-dimensional arrays, along with their corresponding type annotations.

Hello!
You're a research biologist at the Strongly Typed Institute of Biochemistry.
We've got a great task for you today: analyzing sequences of DNA to find mutations!

Don't worry, you won't have to draw on your vast experience of biochemical studies.
We reduced the DNA information to _arrays of single-character strings_.
Your task is to write TypeScript functions that take in DNA and return the differences.
We'll walk you through each of the functions you need to write.

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script within whichever step you're working on.
For example, to start the TypeScript compiler on the first step in watch mode:

```shell
npm run tsc -- --project 01-shallow-equality --watch
```

In another terminal, run Jest via the `test` script on whichever step you're working on.
For example, to start tests for the first step in watch mode:

```shell
npm run test -- 1 --watch
```

## Steps

- [1. Shallow Equality](./01-shallow-equality)
- [2. Shallow Differences](./02-shallow-differences)
- [3. Deep Equality](./03-deep-equality)
- [4. Deep Differences](./04-deep-differences)

## Notes

- Please solve these with `for` loops, not fancy `.map`/`.reduce` shenanigans or with npm libraries.
  - For bonus points, you can try making versions of all the steps that only use array methods instead of `for` loops!
- Don't import code from one step into another.
