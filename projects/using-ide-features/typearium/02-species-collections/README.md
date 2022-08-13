# Step 2: Species Collections

Lovely, now we can log our favorite animals much more easily!
Thank you!

Next up, I'll need you to clean up the internals of our `getEverything` function.
It's meant to be used to get a list of the plants and animals someone might want to see on a visit.

Over time we've found ourselves writing a lot of functions used by `getEverything`.
We'd like to move those functions into their own files.
For each function in `index.ts` other than `getEverything`, could you please use your IDE to move it and its corresponding `*Settings` interface to a new file?

Please also nest the files as appropriate:

- `./fauna.ts` and `./flora.ts` for one `get*` function each
- `./fauna/*.ts` and `./flora/*.ts` for the functions used by their respective `get*` function
- `./utils/*.ts` for any standalone utility function

:::tip
Once you're done, use find-all-references on `onlyTruthy` and the various settings interfaces to practice navigating with IDE features.
:::

## Files

- `index.ts`: Refactor the functions here
- `index.test.ts`: Tests verifying the refactored functions
- `solution.ts`: Solution code
