# Step 2: Recipes

Those salad ingredients are looking delectable, thank you!
Next up is my list of favorite recipes.

It looks like these seem to pass the TypeScript compiler fine as-is.
However, there's a catch: I want to make sure future recipes keep to the same `difficulty` and `group` types.
Could you please use unions of literal types for them?
Both should only have three possible values.

This time, the runtime code is mostly working fine.
Except I think I made a typo in one of the `group` values?
You'll need to fix that.
Otherwise it's just the type annotations you'll need to correct.

## Files

- `index.ts`: Fix the type annotations here
- `solution.ts`: Solution code
