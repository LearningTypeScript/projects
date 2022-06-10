# Step 3: Zip

Let's crank things up a little bit with array spreads and rests.
This step won't introduce any new concepts.
You'll be using the same concepts from the last two steps more.

Write a `Zip` type that takes in two array types, `T` and `U`.
It should "zip" them together akin to the behavior of [Lodash's `zip`](https://lodash.com/docs/4.17.15#zip).

## Examples

- `Zip<["a"], [1]>` -> `["a", 1]`
- `Zip<["a", "b"], [1]>` -> `["a", 1, "b"]`
- `Zip<["a", "b"], [1, 2, 3]>` -> `["a", 1, "b", 2, 3]`

## Files

- `index.ts`: Write your `Zip` type here
- `solution.ts`: Solution code
