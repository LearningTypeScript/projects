# Type Illusions

> A [Learning TypeScript > Declaration Files](https://learning-typescript.com/declaration-files) 🍲 entree project.

Salutations!
Come one, come all - to the amazing _Type Illusionist!_

It's no trick, no common shenanigan.
These _illusions_ will amaze and astound.

Watch as I make the entire `./show.ts` file... disappear!
✨ _Poof!_ ✨

But wait, there's more!
I will also disappear all the type annotations in `./index.ts`, leaving behind only JavaScript!

Now, our audience volunteer _-that's you!-_ will have to add those type annotations back to prove the magic did not harm the code's runtime behavior.

## Setup

In your terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

## Files

- `index.ts`: Add back type imports from `"./show"` and corresponding type annotations
- `show.d.ts`: Declare types for the missing show module here based on the remaining code in `index.ts`
- `index.solution.ts` and `show.solution.ts`: Solution code

## Notes

- Don't use `any` or leave any implicit `any`s.
- Don't change any runtime code behavior. You're just working in the type system.
