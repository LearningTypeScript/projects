# Horror Factory

> A [Learning TypeScript > Classes](https://learning-typescript.com/classes) 🍰 dessert project.

Hold on a moment!
That abstract `Horror` class you wrote...
It works, but have you heard of the _factory pattern_?

There's no need to make sub-classes for it when you can have a single `Horror` class take in its different behaviors as constructor parameters.
Let's refactor the classes to do that.

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

The functional behavior of demons and sorcerers should work the same as in the entree project.
However, instead of having `Demon` and `Sorcerer` classes, the exported `Horror` class should have a constructor that takes in an object containing `name`, `isEvil`, and `getPowerFrom`.

Then, create and export `createDemon` and `createSorcerer` functions instead of `Demon` and `Sorcerer` classes.

## Notes

- Because there is now only one `Horror` class, don't use `abstract` or `protected`. Stick with true `#` privacy.
