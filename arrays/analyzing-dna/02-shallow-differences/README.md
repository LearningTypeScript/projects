# Step 2: Shallow Differences

Knowing whether two DNA sequences are the same is a good start.
But we'll need to know which elements are the same in order to compare DNA sequences against each other.

Now we'll need you to write a `shallowDifferences`.
It takes in two DNA sequences and returns either `undefined` if the sequences are a different length, or an array if they're the same length.
For each index in that array, if the two sequences have the same string at that index, include that string.
Otherwise include `undefined`.

## Specification

Parameters:

1. `a`: An array of strings
2. `b`: An array of strings

Return:

- If `a` and `b` have different lengths, `undefined`
- If `a` and `b` have the same length, an array where, for each index:
  - If `a` and `b` have the same element at that index: that element
  - If `a` and `b` have different elements at that index, `undefined`

## Files

- `index.ts`: Write your `shallowDifferences` function here
- `index.test.ts`: Tests verifying `shallowDifferences`
- `solution.ts`: Solution code
