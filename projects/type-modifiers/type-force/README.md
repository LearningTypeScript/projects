# Type Force

> A [Learning TypeScript > Type Modifiers](https://learning-typescript.com/type-modifiers) 🍲 entree project.

Greetings, hero.
You have been carefully selected from a list of individuals who have demonstrated extraordinary powers in working with type systems.
Welcome to the ✖ Type Force ✖.

Your powers in particular have manifested themselves in your ability to analyze situations for probable outcomes.
How wondrously useful.

We need you to develop a prediction engine that harnesses your abilities for good.
We've started what we can with a variable and a function, but sadly do not have type system expertise ourselves.
Your task is to create a `duel` function that takes in descriptions of two fighters as tuples, and returns a tuple describing the victor.
You'll also need to fill in type annotations in the existing code.

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

Create and export a `duel` function with two parameters, `good` and `bad`, both of which are objects containing the following properties:

- `mutations`: Array of strings that are keys in the `mutationsLibrary` object
- `name`: A string

Internally it will create a character for each variable.
A character object can be created with the following steps:

1. Initialize a `flying` property as `false`, and `power` and `toughness` as `1`
2. For each mutation in the power, run the corresponding function from `mutationsLibrary` on the character

The `duel` function's return type should be a read-only tuple containing two elements:

1. Either `"hero"` or `"villain"`, indicating who won, as computed by who has the higher of: their power divided by the other character's toughness
2. The winning character object

## Files

- `index.ts`: Add your types and `duel` function here
- `index.test.ts`: Tests verifying your types and `duel` function
- `solution.ts`: Solution code

## Notes

- The existing code has correct runtime behavior. You'll need to add type annotations to it, but don't delete any existing code.
