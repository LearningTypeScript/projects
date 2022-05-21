# Step 2: Zip

The next function we'll need you to write is `zip`.
It takes in two arrays and returns a new array containing alternating elements from the two arrays, in order.

Note that the two arrays might contain different types of values from each other and/or have different lengths.
If an array has a longer length, its remaining elements should all be added to the resultant array.

## Specification

Parameters:

1. `a`: An array
2. `b`: Another array

Return: An array containing alternating elements from the two arrays, in order.

Example: `zip(['a', 'b', 'c', 'd'], [1, 2])` -> `['a', 1, 'b', 2, 'c', 'd']`

## Files

- `index.ts`: Write your `zip` function here
- `index.test.ts`: Tests verifying `zip`
- `solution.ts`: Solution code
