# Primitive Cooking

> A [Learning TypeScript > Unions and Literals](https://learning-typescript.com/unions-and-literals) 🥗 appetizer project.

Those pesky Java programmers are at it again!

I wrote a few functions for a friend to help arrange meals when I have guests over.
The friend worked with their enterprise application development team to "improve" the code.
Next thing I know, they've replaced all my TypeScript-y literal and union types with plain old primitive types.

Those Java fans are perfectly good developers -and lovely people- but we don't see eye-to-eye on type systems.
Now TypeScript is reporting type errors on my code.
Could you please correct the type annotations in my files -- and maybe a couple bugs the improved types helped TypeScript find?

## Setup

Start the TypeScript compiler in watch mode:

```shell
tsc --watch
```

## Steps

- [1. Ingredients](./01-ingredients)
- [2. Recipes](./02-recipes)
- [3. Seating](./03-seating)

## Notes

- Most of the changes you'll be making are to type annotations.
  - The only changes to runtime code behavior will be small typo fixes.
- Don't use `any`.
