# Secret Secrets

> A [Learning TypeScript > Functions](https://learning-typescript.com/functions) 🥗 appetizer project.

_"Secret secrets are no fun. Secret secrets hurt someone."_
A wise nurse once told me that.
And yet, in my business as the best top-secret agent in the business, secret secrets are _sine qua nons_.

We believe our rival -the dastardly Goldberger- has been spying on our messages.
Your mission, should you choose to accept it, is to aide me in creating TypeScript functions for text encoding and secret management.
Are you up to the task, recruit?

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

- [1. Incoming Cipher](./01-incoming-cipher)
- [2. Dr. On](./02-dr-on)
- [3. The Golden Code](./03-the-golden-code)

## Notes

- Please solve these with `for` loops, not fancy `.map`/`.reduce` shenanigans or with npm libraries.
  - For bonus points, you can try making versions of all the steps that only use array methods instead of `for` loops!
- Don't import code from one step into another.
