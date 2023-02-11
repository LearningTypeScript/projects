# Step 1: Syntactic Sugar

> _"In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express."_ - [Wikipedia](https://en.wikipedia.org/wiki/Syntactic_sugar)

The first project you must improve is written in relatively old JavaScript style.
Its `announceMachines` function, as written in the [`original.js`](./original.js) file, is meant to receive an `announce` function and any number of machine objects.
It does two things:

- Call `announce` for each of the machine objects: with the machine's `label` property if it exists, or with its `make` and `model` properties if not
- Return a number indicating how many machine objects had a `label` property

That function uses `var` for variables, `arguments` for allowing a flexible number of arguments, and manual string concatenation.
Can you imagine humans previously writing code in that way?

Your task is to rewrite the function using more modern JavaScript syntax.

## Specification

In `index.js`, export an `announceMachines` function that:

- Uses `let` and `const` instead of `var` for variables
- Uses `...` spread for arguments instead of `arguments`
- Uses a `for`-`of` loop instead of a loop
- Uses <code>\`</code> template string literal concatenation instead of `+`

## Files

- `index.js`: Write your `announceMachines` function here
- `index.test.js`: Tests verifying `announceMachines`
- `solution.js`: Solution code
